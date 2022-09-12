<template>
	<FormBuilder :options="options" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

import { customFields } from '@/constants/data';
import FormBuilder from '@/components/case-2/FormBuilder.vue';

const options = ref(customFields);
</script>
