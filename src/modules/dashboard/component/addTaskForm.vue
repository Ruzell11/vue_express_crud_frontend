<script>
export default {
    name: "Add Task Form",
    props: {
        handleSubmit: {
            required: true,
        },
        formData: {
            type: Object,
            required: true
        },
        isLoading: {
            type: Boolean,
            required: true
        }
    },
}
</script>
<template>
    <form class="mt-8 space-y-3" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm space-y-2">
            <div>
                <label for="task_title" class="sr-only">Task Title</label>
                <input id="task_title" name="task_title" type="text" required v-model="formData.taskTitle" class="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900
                rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm border
                border-gray-200" placeholder="Task Title" />
            </div>
            <div>
                <label for="task_description" class="sr-only">Task Title</label>
                <input id="task_description" name="task_description" type="task_description" required
                    v-model="formData.taskDescription"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm border border-gray-200"
                    placeholder="Task Description" />
            </div>

        </div>

        <button :disabled="isLoading" type="submit" :class="{
            'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500': !isLoading,
            'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-500 cursor-not-allowed': isLoading
        }">
            <span v-if="isLoading">Loading...</span>
            <span v-else>Submit</span>
        </button>

    </form>
</template>