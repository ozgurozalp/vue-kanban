import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { deletePost, getPosts, insertPost, updatePost as _updatePost } from '@/services/postService';
import { getFields } from '@/services/fieldService';

export const usePostStore = defineStore('postStore', () => {
	const posts = ref({});
	const fields = ref(useLocalStorage('fields', []));

	function addPost(key: string, value: any) {
		// @ts-ignore
		posts.value[key] = value;
		insertPost(key, value);
	}

	function removePost(key: string) {
		// @ts-ignore
		delete posts.value[key];
		deletePost(key);
	}

	function updatePost(id: string, post: any) {
		// @ts-ignore
		posts.value[id] = post;
		_updatePost(id, { data: post });
	}

	function getPost(key: string): object | undefined {
		// @ts-ignore
		return posts.value[key];
	}

	function setField(field: any) {
		fields.value = field;
	}

	function fetchFields() {
		getFields().then(res => {
			console.log(res);
			fields.value = res;
		});
	}

	function fetchPosts() {
		getPosts().then(res => {
			posts.value = res;
		});
	}

	return {
		posts,
		fields,
		addPost,
		removePost,
		getPost,
		updatePost,
		setField,
		fetchPosts,
		fetchFields,
	};
});
export default usePostStore;
