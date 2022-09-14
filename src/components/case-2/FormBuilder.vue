<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { prepareData } from '@/helpers';
import { InputComponents } from '@/constants';
import { usePostStore } from '@/store';
const emit = defineEmits(['submit']);

const props = defineProps<{
	fields: any[];
}>();
const store = usePostStore();
const userData = ref([]);

onMounted(() => {
	userData.value = prepareData(props.fields);
	store.fetchFields();
});

const rules = computed(() => {
	const require = helpers.withMessage('This field is required', required);
	return props.fields.reduce((acc, curr) => {
		return {
			...acc,
			// @ts-ignore
			[`cf_${curr.id}`]: { ...(curr.is_required && { require }) },
		};
	}, {});
});
const v$ = useVuelidate(rules, userData);

const sorted = computed(() => {
	// @ts-ignore
	return props.fields.sort((a, b) => a.order - b.order);
});

async function submit() {
	if (!v$.value.$invalid) {
		emit('submit', userData.value);
	}
}
</script>

<template>
	<div class="mx-auto grid w-full grid-cols-12 gap-x-4 gap-y-2 bg-white p-4 shadow md:w-6/12">
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
