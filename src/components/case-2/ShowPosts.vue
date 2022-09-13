<template>
	<section class="grid gap-4 md:grid-cols-3" v-if="store.posts.length > 0">
		<Post v-for="(post, i) in store.posts" :post="post" :key="i" />
	</section>
	<section v-else>
		<p class="text-center text-2xl text-red-500">No posts found. Click to 'Add Post' button to add post</p>
	</section>
</template>

<script setup lang="ts">
import { usePostStore } from '@/store';

const store = usePostStore();
import Post from '@/components/case-2/Post.vue';
</script>
