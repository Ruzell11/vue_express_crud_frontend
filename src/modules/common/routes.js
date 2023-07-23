import { createRouter, createWebHistory } from 'vue-router';
import Login from '../login/index.vue';
import Register from '../register/index.vue'
import Dashboard from '../dashboard/index.vue';
import jsCookie from 'js-cookie';


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

const isAuthenticated = () => {
    const token = jsCookie.get('token')

    if (token == undefined) {
        return false
    }

    return true
}


router.beforeEach(async (to, from) => {

    if (!isAuthenticated() && to.name === 'Dashboard') {

        return { name: 'Login' }
    }

    if (isAuthenticated() && to.name !== "Dashboard") {
        return { name: "Dashboard" }
    }
})

export default router;