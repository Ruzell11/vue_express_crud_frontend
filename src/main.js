import { createApp } from 'vue';
import App from './App.vue';
import './style.css'
import router from './modules/common/js/routes'; // Your routes configuration/

createApp(App).use(router).mount("#app")
