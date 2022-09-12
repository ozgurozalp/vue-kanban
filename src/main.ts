import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/app.css';
import { router } from '@/router';
import Popper from 'vue3-popper';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.component('Popper', Popper);
app.mount('#app');
