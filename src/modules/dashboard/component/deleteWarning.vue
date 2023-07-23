<script>
import { useMutation } from '@tanstack/vue-query';
import { deleteTask } from '../service'
import { showNotification } from '../../common/utils/notification';
export default {
    name: "Delete Warning",
    props: {
        taskDetails: {
            required: true,
            type: Object
        },
        closeModalFunctionDelete: {
            required: true
        },
        getTheLatestTaskList: {
            required: true
        }
    },
    setup(props) {
        const { mutate, isLoading } = useMutation(deleteTask)

        const handleConfirmDelete = () => {
            mutate({ task_id: props.taskDetails.task_id }, {
                onSuccess: () => {
                    showNotification("Task deleted successfully", "success")
                    props.getTheLatestTaskList()
                    props.closeModalFunctionDelete()
                },
                onError: () => {
                    showNotification("Something went wrong", "error")
                }
            })
        }

        return {
            isLoading,
            handleConfirmDelete
        }
    }
}
</script>

<template>
    <p class="text-gray-700">Are you sure you want to delete?</p>
    <p class="text-gray-400">{{ taskDetails.name }} Task</p>
    <p class="text-gray-500">This action is irreversible!</p>
    <div class="mt-6 flex justify-end">
        <button @click="handleConfirmDelete" :disabled="isLoading" :class="{
            'group relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50': !isLoading,
            'group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-500 cursor-not-allowed': isLoading
        }">
            Confirm
        </button>
        <button @click="closeModalFunctionDelete"
            class="ml-4 px-4 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-200">
            Cancel
        </button>
    </div>
</template>
               