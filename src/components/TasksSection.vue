<script setup lang="ts">
import { ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStore } from '@/store';
import { VueDraggableNext } from 'vue-draggable-next';
import type { Section } from '@/types';

import TaskCard from '@/components/TaskCard.vue';
import IconTrash from '@/components/icons/IconTrash.vue';

const props = defineProps<{
	section: Section;
}>();

const store = useStore();
const clicked = ref(false);
const sectionName = ref(props.section.sectionName);
const targetInput = ref<HTMLInputElement | null>(null);

onClickOutside(targetInput, () => {
	if (!clicked.value) return;
	clicked.value = false;
});

function toggleClicked(e: MouseEvent | KeyboardEvent) {
	if (sectionName.value.trim().length === 0) return;
	clicked.value = !clicked.value;
}

function deleteSection() {
	store.removeSection(props.section.id);
}

watch(sectionName, newValue => {
	store.updateSectionName(props.section.id, newValue);
});

watch(clicked, (newValue, oldValue) => {
	if (newValue) {
		setTimeout(() => {
			targetInput.value?.focus();
		}, 0);
	}
});
</script>

<template>
	<section class="flex w-80 flex-col gap-[26px]">
		<header class="flex justify-between rounded-[2px] bg-white px-5 py-2.5 shadow-[0_0_2px_rgba(118,96,126,0.45)]">
			<input
				class="max-w-[220px] flex-1 cursor-text text-xl font-medium text-[#333] outline-gray-900"
				ref="targetInput"
				type="text"
				spellcheck="false"
				v-model="sectionName"
				v-if="clicked"
				@keyup.enter="toggleClicked"
			/>
			<h5 @click="toggleClicked" v-else class="max-w-[220px] flex-1 cursor-text text-xl font-medium text-[#333]">
				{{ section.sectionName }}
			</h5>
			<div class="flex items-center gap-1">
				<button
					@click="deleteSection"
					class="flex aspect-square w-6 items-center justify-center text-[#828282] transition-colors hover:text-black"
				>
					<IconTrash class="h-4 w-4" />
				</button>
			</div>
		</header>
		<VueDraggableNext
			class="flex h-full flex-1 flex-col flex-col gap-4 gap-4"
			:list="section.tasks"
			:group="{ name: 'g1' }"
		>
			<TransitionGroup name="sort">
				<template v-for="task in section.tasks" :key="task.id">
					<TaskCard :task="task" />
				</template>
			</TransitionGroup>
		</VueDraggableNext>
	</section>
</template>
