<script>
import Modal from '../common/components/Modal.vue';
import AddTaskForm from './component/addTaskForm.vue';
import TaskList from './component/taskList.vue';
import { addTask, getTaskList, logoutUser } from './service'
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query"
import { showNotification } from '../common/utils/notification'
import { useRouter } from 'vue-router';
import jsCookie from 'js-cookie'
export default {
    name: "Dashboard",
    components: {
        Modal,
        AddTaskForm,
        TaskList
    },
    data() {
        return {
            showModal: false,
        };
    },
    setup() {
        const router = useRouter();
        const queryClient = useQueryClient()
        const userDetails = JSON.parse(localStorage.getItem('user_details'))
        const { mutate, isLoading } = useMutation(addTask);
        const { mutate: userLogout } = useMutation(logoutUser, {
            onSuccess: () => {
                showNotification("Logout successfully", "success")
                router.push('/');
                localStorage.removeItem('user_details')
                jsCookie.remove('token')
            },
            onError: () => {
                showNotification("Unauthenticated", "error")
                router.push('/')
            }
        })
        const LIST_KEY = "TODOS"

        const params = {
            taskTitle: "",
            taskDescription: "",
            user_id: userDetails.id
        }

        const getTheLatestTaskList = () => {
            queryClient.invalidateQueries(LIST_KEY)
        }

        const handleSubmit = () => {
            mutate(params, {
                onSuccess: () => {
                    showNotification("Task added successfully", "success")
                    getTheLatestTaskList()
                    params.taskTitle = ""
                    params.taskDescription = ""
                },
                onError: () => {
                    showNotification("Something went wrong", "error")
                }
            })
        }

        const handleLogout = () => {
            userLogout()

        }

        const { isLoading: isLoadingTaskList, data: dataTaskList } = useQuery({
            queryKey: [LIST_KEY, userDetails.id],
            queryFn: () => getTaskList({ user_id: userDetails.id }),
        })

        return {
            handleSubmit,
            params,
            isLoading,
            isLoadingTaskList,
            dataTaskList,
            handleLogout
        }
    }
}
</script>

<template>
    <div class="min-h-[80vh] flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">

        <div class="max-w-md w-full space-y-8">
            <button @click="handleLogout"
                class="absolute top-4 right-4 px-4 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-200">
                Logout
            </button>
            <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    To do
                </h2>
            </div>
            <button @click="showModal = true"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Task
            </button>
            <modal :show="showModal" @update:show="showModal = $event">
                <AddTaskForm :handleSubmit="handleSubmit" :formData="params" :isLoading="isLoading" />
            </modal>
            <TaskList :isLoadingTaskList="isLoadingTaskList" :dataTaskList="dataTaskList" />
        </div>
    </div>
</template>
