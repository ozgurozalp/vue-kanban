<template>
	<div class="flex flex-col gap-2">
		<Component
			v-for="field in options"
			:key="field.id"
			:data="field.smart_ddl_items"
			:placeholder="field.place_holder"
			:name="field.name"
			:label="field.place_holder"
			:description="field.description"
			v-model="userData[`cf_${field.id}`]"
			:is="components[field.input_type]"
		></Component>
	</div>
</template>

<script setup lang="ts">
import type { CustomField } from '@/constants/data';
import { reactive, defineAsyncComponent, watch } from 'vue';

const props = defineProps<{
	options: CustomField;
}>();

const components = {
	text: defineAsyncComponent(() => import('@/components/case-2/CustomInput.vue')),
	checkbox: defineAsyncComponent(() => import('@/components/case-2/CustomCheckbox.vue')),
	textbox: defineAsyncComponent(() => import('@/components/case-2/CustomInput.vue')),
	calendar: defineAsyncComponent(() => import('@/components/case-2/DatePicker.vue')),
	smart_ddl: defineAsyncComponent(() => import('@/components/case-2/SelectBox.vue')),
};

const prepareData = () => {
	return props.options.reduce((acc, curr) => {
		return {
			...acc,
			[`cf_${curr.id}`]: curr.default_value,
		};
	}, {});
};
const userData = reactive(prepareData());

watch(userData, data => {
	console.log({ ...data });
});
</script>
