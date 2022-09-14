<template>
	<FormBuilder :fields="data" @submit="addPost" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FormBuilder from '@/components/case-2/FormBuilder.vue';
import { usePostStore } from '@/store';
import { useRouter, useRoute } from 'vue-router';
import { getPost } from '@/services/postService';

const store = usePostStore();
const router = useRouter();
const route = useRoute();
const post = ref({});

const data = computed(() => {
	const _data = store.fields;
	for (let key in post.value) {
		// @ts-ignore
		const field = _data.find(field => field.id === key.split('_')[1]);
		if (field) {
			// @ts-ignore
			field.default_value = post.value[key];
		}
	}
	return _data;
});

getDetail();

function getDetail() {
	if (route?.params?.id) {
		// @ts-ignore
		getPost(route?.params?.id).then(res => {
			for (let resKey in res) {
				// @ts-ignore
				post.value[resKey] = res[resKey];
			}
		});
	}
}

function addPost(data: any) {
	// @ts-ignore
	store.updatePost(route?.params?.id, data);
	router.push({ name: 'case-2' });
}
</script>
