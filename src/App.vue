<template>
	<div class="container mx-auto h-screen p-4">
		<RouterView />
	</div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/store';
import { onMounted } from 'vue';

const store = usePostStore();

onMounted(() => {
	store.fetchFields();
	store.fetchPosts();
});
</script>
