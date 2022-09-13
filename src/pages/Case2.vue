<script setup lang="ts">
import ShowPosts from '@/components/case-2/ShowPosts.vue';
</script>

<template>
	<RouterLink :to="{ name: 'add-post' }" class="link mb-10 w-fit whitespace-nowrap text-3xl">Add Post</RouterLink>
	<ShowPosts />
</template>
