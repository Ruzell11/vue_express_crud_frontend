<template>
    <form class="mt-8 space-y-3" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm space-y-2">

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
            <router-link to="/register" class="text-indigo-500 text-sm">
                Don't have an account? Register
            </router-link>
        </div>
        <button :disabled="loading" type="submit" :class="{
            'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500': !loading,
            'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-500 cursor-not-allowed': loading
        }">
            <span v-if="loading">Loading...</span>
            <span v-else>Login</span>
        </button>

    </form>
</template>

<script>

import { useToLoginUser } from '../service';
import { showNotification } from '../../common/utils/notification';
import jsCookie from 'js-cookie';


export default {
    name: "LoginForm",
    data() {
        return {
            formData: {
                email: "",
                password: ""
                // Add more form fields for password, email, etc.
                // For simplicity, I'm only showing the username field
            },
            errors: {},
            loading: false
        };

    },
    methods: {
        async handleSubmit() {
            this.loading = true
            const params = {
                email: this.formData.email,
                password: this.formData.password
            }

            try {
                const data = await useToLoginUser(params)

                localStorage.setItem('user_details', JSON.stringify({
                    id: data.data.id,
                    name: data.data.name,
                    email: data.data.email
                }))

                jsCookie.set('token', data.data.token)

                showNotification("Login success", "success")
                this.loading = false;
            } catch (error) {
                showNotification("Something went wrong", "error")
            }
        }
    }
}
</script>