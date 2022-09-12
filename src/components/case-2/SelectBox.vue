<script setup lang="ts">
import Info from '@/components/case-2/Info.vue';
const props = defineProps<{
	description?: string;
	label?: string;
	data: [
		{
			id: string;
			name: string;
			value: string;
		}
	];
	modelValue: {
		id: string;
		name: string;
		value: string;
	};
	name?: string;
}>();

const emit = defineEmits(['update:modelValue']);

function changeHandler(event: InputEvent) {
	const target = event.target as HTMLSelectElement;
	const selected = props.data.find(item => item.id === target.value);
	emit('update:modelValue', selected);
}
</script>

<template>
	<label class="flex flex-col gap-2">
		<span class="flex items-center gap-2" v-if="label">
			{{ label }}
			<Info v-if="description" :text="description" />
		</span>
		<span class="relative">
			<select :name="name" @change="changeHandler" :value="modelValue">
				<option :value="option.id" v-for="option in data" :key="option.id">
					{{ option.name }}
				</option>
			</select>
			<span v-if="modelValue?.value" class="absolute left-3 top-1/2 -translate-y-1/2">{{ modelValue.name }}</span>
		</span>
	</label>
</template>
