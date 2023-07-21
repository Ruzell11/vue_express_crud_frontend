import { createRouter, createWebHistory } from 'vue-router';
import Login from '../../login/index.vue';
import Register from '../../register/index.vue';

const routes = [
    { path: '/login', component: Login, name: "Login" },
    { path: '/register', component: Register, name: "Register" },
    // Add other routes here
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;