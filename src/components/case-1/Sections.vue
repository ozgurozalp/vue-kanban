<script setup lang="ts">
import TasksSection from '@/components/case-1/TasksSection.vue';
import { useKanbanStore } from '@/store';
import { VueDraggableNext } from 'vue-draggable-next';

const store = useKanbanStore();

function addSection() {
	store.addSection();
}
</script>
<template>
	<div class="flex h-full flex-col gap-1 md:flex-row md:gap-8">
		<VueDraggableNext
			class="flex snap-x snap-mandatory gap-5 overflow-auto scroll-smooth pb-5 [&>*]:shrink-0 [&>*]:grow-0 [&>*]:snap-start [&>*]:snap-always"
			:list="store.sections"
		>
			<TransitionGroup name="sort">
				<TasksSection v-for="section in store.sections" :key="section.id" :section="section" />
			</TransitionGroup>
		</VueDraggableNext>
		<button
			@click="addSection"
			class="flex items-center justify-center gap-2.5 self-start justify-self-start whitespace-nowrap rounded-[6px] bg-[#2F80ED] p-2.5 text-[#FBFBFB]"
		>
			<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6.5 0.5C6.69891 0.5 6.88968 0.579018 7.03033 0.71967C7.17098 0.860322 7.25 1.05109 7.25 1.25V5.75H11.75C11.9489 5.75 12.1397 5.82902 12.2803 5.96967C12.421 6.11032 12.5 6.30109 12.5 6.5C12.5 6.69891 12.421 6.88968 12.2803 7.03033C12.1397 7.17098 11.9489 7.25 11.75 7.25H7.25V11.75C7.25 11.9489 7.17098 12.1397 7.03033 12.2803C6.88968 12.421 6.69891 12.5 6.5 12.5C6.30109 12.5 6.11032 12.421 5.96967 12.2803C5.82902 12.1397 5.75 11.9489 5.75 11.75V7.25H1.25C1.05109 7.25 0.860322 7.17098 0.71967 7.03033C0.579018 6.88968 0.5 6.69891 0.5 6.5C0.5 6.30109 0.579018 6.11032 0.71967 5.96967C0.860322 5.82902 1.05109 5.75 1.25 5.75H5.75V1.25C5.75 1.05109 5.82902 0.860322 5.96967 0.71967C6.11032 0.579018 6.30109 0.5 6.5 0.5Z"
					fill="#FBFBFB"
				/>
			</svg>
			Add Section
		</button>
	</div>
</template>

<style>
.sortable-ghost {
	opacity: 0;
}
</style>
