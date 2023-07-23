<script>
import RegisterForm from './component/registerForm.vue';

export default {
  components: {
    RegisterForm,
  },

};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register for an Account
        </h2>
      </div>
      <RegisterForm />
    </div>
  </div>
</template>


