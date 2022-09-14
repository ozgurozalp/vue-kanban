<script setup lang="ts">
import { computed, ref } from 'vue';
import Info from '@/components/case-2/Info.vue';

const props = defineProps<{
	label?: string;
	description?: string;
	modelValue: string | Date;
	name?: string;
	validator?: any;
}>();

const input = ref<HTMLInputElement | null>(null);

const value = computed(() => {
	if (!props.modelValue) return '';

	if (props.modelValue instanceof Date) {
		return props.modelValue.toISOString().substring(0, 10);
	}
	return new Date(props.modelValue).toISOString().substring(0, 10);
});

function openPicker() {
	//@ts-ignore
	input.value?.showPicker();
}
</script>
<template>
	<label class="flex flex-col gap-2">
		<span class="flex items-center gap-2 text-sm sm:text-xl" v-if="label">
			{{ label }}
			<Info v-if="description" :text="description" />
		</span>
		<input
			ref="input"
			@click="openPicker"
			type="date"
			:name="name"
			@input="$emit('update:modelValue', $event.target.value)"
			:value="value"
			@blur="validator.$touch()"
		/>
		<span class="text-sm text-red-500" v-if="validator.$dirty && validator.$invalid">
			{{ validator.require.$message }}
		</span>
	</label>
</template>
