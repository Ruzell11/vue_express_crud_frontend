<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md max-w-md">
        <h2 class="text-2xl font-bold mb-4">Register</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 font-semibold">Username</label>
            <input type="text" v-model="formData.username" id="username" class="form-input mt-1 block w-full" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold">Email</label>
            <input type="email" v-model="formData.email" id="email" class="form-input mt-1 block w-full" />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-semibold">Password</label>
            <input type="password" v-model="formData.password" id="password" class="form-input mt-1 block w-full" />
          </div>
          <div>
            <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded">
              Register
            </button>
          </div>
          <router-link to="/login">Login</router-link>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"Register",
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission here (e.g., send data to backend)
        console.log('Form submitted:', this.formData);
      },
    },
  };


  </script>
  