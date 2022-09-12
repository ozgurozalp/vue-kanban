<script setup lang="ts">
import Info from '@/components/case-2/Info.vue';
defineProps<{
	description?: string;
	label?: string;
	modelValue: string | boolean | number;
	name?: string;
}>();
</script>

<template>
	<label class="flex flex-col gap-2">
		<span class="flex items-center gap-2" v-if="label">
			{{ label }}
			<Info v-if="description" :text="description" />
		</span>
		<input type="text" :name="name" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" />
	</label>
</template>
