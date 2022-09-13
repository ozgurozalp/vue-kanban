<template>
	<FormBuilder :options="options" @submit="addPost" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

import { customFields } from '@/constants';
import FormBuilder from '@/components/case-2/FormBuilder.vue';
import { usePostStore } from '@/store';
import { useRouter } from 'vue-router';

const options = ref(customFields);
const store = usePostStore();
const router = useRouter();

function addPost(data: any) {
	const post = {
		[crypto.randomUUID()]: data,
	};
	store.addPost(post);
	router.push({ name: 'case-2' });
}
</script>
