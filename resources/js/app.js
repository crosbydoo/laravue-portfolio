import './bootstrap';
import 'flowbite';

import {createApp} from 'vue'
import router from "./routes"
import app from './components/app.vue'


createApp(app).use(router).mount('#app');