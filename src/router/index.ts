import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Case1 from '@/pages/Case1.vue';
import Case2 from '@/pages/Case2.vue';
import AddPost from '@/pages/AddPost.vue';
import EditPost from '@/pages/EditPost.vue';

const routes = [
	{ path: '/', name: 'case-1', component: Home },
	{ path: '/case-1', component: Case1 },
	{
		path: '/case-2',
		component: Case2,
		name: 'case-2',
	},
	{
		path: '/case-2/add-post',
		component: AddPost,
		name: 'add-post',
	},
	{
		path: '/case-2/post/:id',
		component: EditPost,
		name: 'edit-post',
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
