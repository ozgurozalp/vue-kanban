import { ref } from 'vue';
import { defineStore } from 'pinia';
import { data } from '@/constants';
import { useLocalStorage } from '@vueuse/core';
import type { Task } from '@/types';

const useKanbanStore = defineStore('kanbanStore', () => {
	const sections = ref(useLocalStorage('sections', data));

	function addSection() {
		sections.value.push({
			id: crypto.randomUUID(),
			sectionName: 'New Section ' + (sections.value.length + 1),
			tasks: [],
			order: sections.value.length + 1,
		});
	}

	function removeSection(id: string) {
		sections.value = sections.value.filter(section => section.id !== id);
	}

	function updateSectionName(id: string, name: string) {
		const section = sections.value.find(section => section.id === id);
		if (section) {
			section.sectionName = name;
		}
	}

	function toggleFavorite(id: string) {
		const task = findTask(id);
		if (task) {
			task.isFavorite = !task.isFavorite;
			task.favoriteCount += task.isFavorite ? 1 : -1;
		}
	}

	function findTask(id: string): Task | undefined {
		// @ts-ignore
		return sections.value.flatMap(section => section.tasks).find(task => task.id === id);
	}

	return { sections, addSection, removeSection, updateSectionName, toggleFavorite };
});
export default useKanbanStore;
