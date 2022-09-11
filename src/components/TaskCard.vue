<template>
	<article
		class="relative grid h-[135px] w-full content-between justify-items-start rounded-[2px] bg-white p-[20px] shadow-[0_0_2px_rgba(118,96,126,0.45)]"
	>
		<span
			class="badge rounded-[2px] bg-[#9B73AA] px-[7px] text-xs font-medium text-white"
			:style="{ background: task?.status.color }"
			>{{ task.status.text }}</span
		>
		<p class="text-base font-normal text-black">{{ task.title }}</p>
		<time class="font text-xs font-normal text-[#828282]">{{ task.date }}</time>
		<div class="top absolute right-2.5 top-2.5 bottom-2.5 flex flex-col justify-between">
			<button
				class="flex aspect-square w-8 items-center justify-center gap-1 px-2 text-[#828282] transition-colors hover:text-black"
			>
				<IconEllipsis class="h-4 w-4 flex-shrink-0 flex-grow-0" vertical />
			</button>
			<button
				@click="toggleFavorite"
				class="flex aspect-square w-8 items-center justify-center gap-1 px-2 text-[#4F4F4F] transition-colors hover:text-black"
			>
				<span class="text-xs tabular-nums leading-none text-[#4F4F4F]">{{ task.favoriteCount }}</span>
				<IconBookmark :filled="task.isFavorite" class="h-4 w-4 flex-shrink-0 flex-grow-0" />
			</button>
		</div>
	</article>
</template>
<script setup lang="ts">
import IconEllipsis from '@/components/icons/IconEllipsis.vue';
import IconBookmark from '@/components/icons/IconBookmark.vue';
import type { Task } from '@/types';
import { useStore } from '@/store';

const props = defineProps<{
	task: Task;
}>();

const store = useStore();

function toggleFavorite() {
	store.toggleFavorite(props.task.id);
}
</script>
