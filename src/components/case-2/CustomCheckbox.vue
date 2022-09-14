<script setup lang="ts">
import Info from '@/components/case-2/Info.vue';
defineProps<{
	description?: string;
	label?: string;
	modelValue?: string | boolean | number;
	name?: string;
	validator?: any;
}>();
</script>

<template>
	<label class="flex flex-col gap-2">
		<span class="flex items-center gap-2" v-if="label">
			<input
				type="checkbox"
				:name="name"
				@change="$emit('update:modelValue', $event.target.checked)"
				:value="modelValue"
				:checked="modelValue"
				@blur="validator.$touch()"
			/>
			<span class="text-sm sm:text-xl"> {{ label }} </span>
			<Info v-if="description" :text="description" />
		</span>
		<span class="text-sm text-red-500" v-if="validator.$dirty && validator.$invalid">
			{{ validator.require.$message }}
		</span>
	</label>
</template>
