<script>
import { showNotification } from '../../common/utils/notification'
import { useToRegisterUser } from '../service'
import useMutation from '@tanstack/vue-query'
export default {
  name: "RegisterForm",
  setup() {
    const { mutate, isLoading } = useMutation(useToRegisterUser);

    const formData = {
      username: '',
      email: '',
      password: '',
    };

    const handleSubmit = async () => {
      mutate(formData, {
        onSuccess: () => {
          showNotification('Register successful!', 'success');


        },
        onError: () => {
          showNotification("Something went wrong. Please try again", "error")
        }
      });
    };

    return {
      formData,
      isLoading,
      handleSubmit,
    };
  },
};
</script>


<template>
  <form class="mt-8 space-y-3" @submit.prevent="handleSubmit">
    <div class="rounded-md shadow-sm space-y-2">
      <div>
        <label for="username" class="sr-only">Username</label>
        <input id="username" name="username" type="text" :class="{
          'border-red-500': errors.username
        }" v-model="formData.username" autocomplete="username" required
          class="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Username" />
      </div>
      <div>
        <label for="email" class="sr-only">Email</label>
        <input id="email" name="email" type="email" :class="{
          'border-red-500': errors.username
        }" v-model="formData.email" autocomplete="email" required
          class="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email" />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input id="password" name="password" type="password" :class="{
          'border-red-500': errors.password
        }" v-model="formData.password" autocomplete="password" required
          class="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password" />

      </div>
    </div>
    <div class="text-start">
      <router-link to="/" class="text-indigo-500 text-sm">
        Already have an account? Login
      </router-link>
    </div>
    <button :disabled="isLoading" type="submit" :class="{
      'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500': !isLoading,
      'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-500 cursor-not-allowed': isLoading
    }">
      <span v-if="isLoading">Loading...</span>
      <span v-else>Register</span>
    </button>

  </form>
</template>

