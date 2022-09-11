import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Case1 from '@/pages/Case1.vue';
import Case2 from '@/pages/Case2.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/case-1', component: Case1 },
	{ path: '/case-2', component: Case2 },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
