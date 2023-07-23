import { createRouter, createWebHistory } from 'vue-router';
import Login from '../login/index.vue';
import Register from '../register/index.vue'
import Dashboard from '../dashboard/index.vue';

const routes = [
    { path: '/', component: Login, name: "Login" },
    { path: '/register', component: Register, name: "Register" },
    { path: '/dashboard', component: Dashboard, name: "Dashboard" }
    // Add other routes here
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;