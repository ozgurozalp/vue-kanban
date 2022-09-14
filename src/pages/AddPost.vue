<template>
	<FormBuilder :fields="fields" @submit="addPost" />
</template>
<script setup lang="ts">
import FormBuilder from '@/components/case-2/FormBuilder.vue';
import { usePostStore } from '@/store';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const store = usePostStore();
const router = useRouter();
const fields = computed(() => store.fields);

function addPost(data: any) {
	const id = crypto.randomUUID();
	store.addPost(id, data);
	router.push({ name: 'case-2' });
}
</script>
