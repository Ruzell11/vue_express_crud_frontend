import { createApp } from 'vue';
import App from './App.vue';
import './style.css'
import router from './modules/common/routes';
import 'vue-toast-notification/dist/theme-default.css';
import ToastPlugin from 'vue-toast-notification';
import { VueQueryPlugin } from "@tanstack/vue-query";


createApp(App).use(ToastPlugin).use(VueQueryPlugin).use(router).mount("#app")
