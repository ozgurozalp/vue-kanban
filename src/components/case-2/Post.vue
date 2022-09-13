<template>
	<article class="relative flex flex-col gap-2 bg-white p-4 shadow">
		<h1 class="text-2xl font-bold">{{ parsedPost.Title }}</h1>
		<p class="text-sm">{{ parsedPost.Category.name }}</p>
		<p class="text-sm">{{ new Date(parsedPost['Created Date']).toDateString() }}</p>
		<p class="text-md flex-1 text-justify">{{ parsedPost.Details }}</p>
		<p class="text-right text-orange-500">
			<span v-if="!parsedPost['Allow Comments']">not</span> open for comments
		</p>
		<div class="absolute right-4 top-4 grid grid-cols-2 gap-2">
			<RouterLink class="text-gray-700 hover:text-gray-900" :to="{ name: 'edit-post', params: { id: postId } }">
				<IconPencil class="h-5 w-5" />
			</RouterLink>
			<button @click="deletePost">
				<IconTrash class="h-5 w-5" />
			</button>
		</div>
	</article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { customFields } from '@/constants';
import IconTrash from '@/components/icons/IconTrash.vue';
import IconPencil from '@/components/icons/IconPencil.vue';
import { usePostStore } from '@/store';
const store = usePostStore();

const props = defineProps<{
	post: object;
}>();

const postId = ref(Object.keys(props.post)[0]);

function deletePost() {
	store.removePost(postId.value);
}
const parsedPost = computed(() => {
	return customFields.reduce((acc, curr) => {
		return {
			...acc,
			// @ts-ignore
			[curr.name]: props.post[postId.value][`cf_${curr.id}`],
		};
	}, {});
});
</script>
