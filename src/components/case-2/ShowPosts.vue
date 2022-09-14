<template>
	<section class="grid gap-4 md:grid-cols-3" v-if="Object.keys(posts).length > 0">
		<Post v-for="(post, i) in posts" :key="i" :post="post" :post-id="getId(i)" />
	</section>
	<section v-else>
		<p class="rounded bg-white p-4 text-center text-2xl text-red-500">
			<span class="mb-4 block">No Posts Found !!!</span>
			Click to 'Add Post' button to add post
		</p>
	</section>
</template>

<script setup lang="ts">
import Post from '@/components/case-2/Post.vue';
import { computed, watch } from 'vue';
import { usePostStore } from '@/store';

const store = usePostStore();
const getId = (index: number) => Object.keys(store.posts)[index];

const posts = computed(() => {
	// @ts-ignore
	return Object.values(store.posts);
});
</script>
