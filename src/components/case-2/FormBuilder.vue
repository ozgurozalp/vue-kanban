<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { prepareData } from '@/helpers';
import { InputComponents } from '@/constants';
import type { CustomField } from '@/constants';

const props = defineProps<{
	options: CustomField;
}>();

const emit = defineEmits(['submit']);

const userData = reactive(prepareData(props.options));

const rules = computed(() => {
	const require = helpers.withMessage('This field is required', required);
	return props.options.reduce((acc, curr) => {
		return {
			...acc,
			[`cf_${curr.id}`]: { ...(curr.is_required && { require }) },
		};
	}, {});
});
const v$ = useVuelidate(rules, userData);

const sorted = computed(() => {
	return props.options.sort((a, b) => a.order - b.order);
});

async function submit() {
	if (!v$.value.$invalid) {
		emit('submit', userData);
	}
}
</script>

<template>
	<div class="grid grid-cols-12 gap-x-4 gap-y-2">
		<div v-for="field in sorted" :key="field.id" :class="`col-span-12 sm:col-span-${field.css_style}`">
			<Component
				:data="field.smart_ddl_items"
				:placeholder="field.place_holder"
				:name="field.name"
				:label="field.place_holder"
				:description="field.description"
				v-model="userData[`cf_${field.id}`]"
				:validator="v$[`cf_${field.id}`]"
				:is="InputComponents[field.input_type]"
			/>
		</div>
		<div class="col-span-12 flex justify-end [&>button:not(:disabled):hover]:bg-purple-700">
			<Popper
				placement="left"
				:disabled="!v$.$invalid"
				class="cursor-pointer"
				content="Please fill out all required fields"
			>
				<button
					@click="submit"
					class="rounded-md bg-purple-600 px-4 py-2 text-white transition disabled:opacity-50"
				>
					Submit
				</button>
			</Popper>
		</div>
	</div>
</template>
