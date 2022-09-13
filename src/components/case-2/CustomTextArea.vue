<script setup lang="ts">
import Info from '@/components/case-2/Info.vue';
defineProps<{
	description?: string;
	label?: string;
	placeholder?: string;
	modelValue: string | boolean | number;
	name?: string;
	validator?: any;
}>();
</script>

<template>
	<label class="flex flex-col gap-2">
		<span class="flex items-center gap-2 text-sm sm:text-xl" v-if="label">
			{{ label }}
			<Info v-if="description" :text="description" />
		</span>
		<textarea
			:placeholder="placeholder"
			:name="name"
			@input="$emit('update:modelValue', $event.target.value)"
			:value="modelValue"
			@blur="validator.$touch()"
		/>
		<span class="text-sm text-red-500" v-if="validator.$dirty && validator.$invalid">
			{{ validator.require.$message }}
		</span>
	</label>
</template>
