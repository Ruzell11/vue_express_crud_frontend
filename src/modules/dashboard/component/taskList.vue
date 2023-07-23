<script >
import Modal from '../../common/components/modal.vue'
import UpdateTaskForm from './updateTaskForm.vue'
import DeleteWarning from './deleteWarning.vue'
import { useQueryClient } from '@tanstack/vue-query'
export default {
    components: {
        Modal,
        UpdateTaskForm,
        DeleteWarning
    },
    name: "Task List",
    props: {
        dataTaskList: {
            type: Object,
            required: true
        },
        isLoadingTaskList: {
            type: Boolean,
            required: true
        },

    },
    data() {
        return {
            queryClient: useQueryClient(),
            LIST_KEY: "TODS",
            taskList: [{}],
            showModal: false,
            showModalDeleteWarning: false,
            taskDetails: {},
            getTheLatestTaskList: () => {
                this.queryClient.invalidateQueries(this.LIST_KEY)
            },
            showModalFunction: (params) => {
                this.showModal = true
                this.taskDetails = params
            },
            showModalFunctionDelete: (params) => {
                this.showModalDeleteWarning = true
                this.taskDetails = params
            },
            closeModalFunction: () => {
                this.showModal = false
            },
            closeModalFunctionDelete: () => {
                this.showModalDeleteWarning = false
            }
        }


    },
    watch: {
        // Watch for changes in the dataTaskList prop
        dataTaskList(newVal) {
            this.taskList = newVal.data.tasks
        },
    },
}
</script>

<template>
    <div class=" p-4 max-h-[300px] overflow-y-auto">
        <!-- List of Items -->
        <div v-if="isLoadingTaskList">Loading...</div>
        <div v-else class="space-y-2">
            <div v-for="task in taskList" :key="task.task_id"
                class="flex items-center justify-between bg-white shadow-sm mb-4 p-4 rounded-lg">
                <div class="flex-1">
                    <h2 class="text-lg font-semibold">{{ task.name }}</h2>
                    <p class="text-gray-600">{{ task.description }}</p>
                </div>

                <div class="flex space-x-2">
                    <button @click="showModalFunction(task)"
                        class="px-2 py-1  bg-indigo-600 text-white rounded">Edit</button>
                    <button @click="showModalFunctionDelete(task)"
                        class="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
            </div>
            <modal :show="showModal" @update:show="showModal = $event">
                <UpdateTaskForm :taskDetails="taskDetails" :closeModalFunction="closeModalFunction"
                    :getTheLatestTaskList="getTheLatestTaskList" />
            </modal>

            <modal :show="showModalDeleteWarning" @update:show="showModalDeleteWarning = $event">
                <DeleteWarning :taskDetails="taskDetails" :closeModalFunctionDelete="closeModalFunctionDelete"
                    :getTheLatestTaskList="getTheLatestTaskList" />

            </modal>
        </div>
    </div>
</template>