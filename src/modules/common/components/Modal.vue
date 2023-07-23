
<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit('update:show', false); // Emit an event to close the modal
        },
    },
};
</script>
  
<template>
    <div class="fixed inset-0 flex items-center justify-center z-50 " v-if="show">
        <div class="fixed inset-0 transition-opacity bg-opacity-50 h-screen bg-black" @click="closeModal"></div>
        <div class="bg-white rounded-lg p-4 max-w-md mx-auto z-50 w-[500px]">
            <slot></slot>
        </div>
    </div>
</template>
  
