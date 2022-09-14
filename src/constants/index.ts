import type { Section } from '@/types';
import { defineAsyncComponent } from 'vue';

export const data: Section[] = [
	{
		id: crypto.randomUUID(),
		sectionName: 'Section 1',
		tasks: [
			{
				id: crypto.randomUUID(),
				title: 'Index 1',
				description: 'Description 1',
				date: '2021-01-01 00:00:00',
				isFavorite: false,
				favoriteCount: 0,
				status: {
					text: 'CONFIRMED',
					color: '#9B73AA',
				},
			},
			{
				id: crypto.randomUUID(),
				title: 'Index 2',
				description: 'Description 2',
				date: '2021-04-01 00:00:00',
				isFavorite: true,
				favoriteCount: 3,
				status: {
					text: 'ON HOLD',
					color: '#BEBEBE',
				},
			},
		],
		order: 1,
	},
	{
		id: crypto.randomUUID(),
		sectionName: 'Section 2',
		tasks: [
			{
				id: crypto.randomUUID(),
				title: 'Section2 - Index 1',
				description: 'Description 1',
				date: '2021-01-01 00:00:00',
				isFavorite: false,
				favoriteCount: 0,
				status: {
					text: 'CANCELLED',
					color: '#EB5757',
				},
			},
			{
				id: crypto.randomUUID(),
				title: 'Section3 - Index 1',
				description: 'Description 2',
				date: '2021-04-01 00:00:00',
				isFavorite: true,
				favoriteCount: 3,
				status: {
					text: 'PENDING',
					color: '#D1B627',
				},
			},
		],
		order: 2,
	},
	{
		id: crypto.randomUUID(),
		sectionName: 'Section 3',
		tasks: [
			{
				id: crypto.randomUUID(),
				title: 'Section3 - Index 1',
				description: 'Description 1',
				date: '2021-01-01 00:00:00',
				isFavorite: false,
				favoriteCount: 0,
				status: {
					text: 'COMPLETED',
					color: '#27AE60',
				},
			},
			{
				id: crypto.randomUUID(),
				title: 'Section3 - Index 1',
				description: 'Description 2',
				date: '2021-04-01 00:00:00',
				isFavorite: true,
				favoriteCount: 3,
				status: {
					text: 'ACTIVE',
					color: '#556783',
				},
			},
		],
		order: 3,
	},
];

export const InputComponents = {
	text: defineAsyncComponent(() => import('@/components/case-2/CustomTextArea.vue')),
	checkbox: defineAsyncComponent(() => import('@/components/case-2/CustomCheckbox.vue')),
	textbox: defineAsyncComponent(() => import('@/components/case-2/CustomInput.vue')),
	calendar: defineAsyncComponent(() => import('@/components/case-2/DatePicker.vue')),
	smart_ddl: defineAsyncComponent(() => import('@/components/case-2/SelectBox.vue')),
};
