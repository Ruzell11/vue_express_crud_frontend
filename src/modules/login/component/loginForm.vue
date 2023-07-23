<script>
import { useToLoginUser } from '../service';
import { showNotification } from '../../common/utils/notification';
import jsCookie from 'js-cookie';
import { useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';

export default {
    name: 'LoginForm',
    setup() {
        const router = useRouter();
        const { mutate, isLoading } = useMutation(useToLoginUser);

        const formData = {
            email: '',
            password: '',
        };

        const handleSubmit = async () => {
            mutate(formData, {
                onSuccess: (response) => {
                    showNotification('Login successful!', 'success');
                    localStorage.setItem('user_details', JSON.stringify({
                        name: response.data.name,
                        email: response.data.email,
                        id: response.data.id
                    }))

                    jsCookie.set('token', response.data.token)
                    router.push('/dashboard')

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
                <label for="email" class="sr-only">Email</label>
                <input id="email" name="email" type="email" v-model="formData.email" autocomplete="email" required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email" />
            </div>
            <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" v-model="formData.password" autocomplete="password"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password" />

            </div>
        </div>
        <div class="text-start">
            <router-link to="/register" class="text-indigo-500 text-sm">
                Don't have an account? Register
            </router-link>
        </div>
        <button :disabled="isLoading" type="submit" :class="{
            'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500': !isLoading,
            'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-500 cursor-not-allowed': isLoading
        }">
            <span v-if="isLoading">Loading...</span>
            <span v-else>Login</span>
        </button>

    </form>
</template>

