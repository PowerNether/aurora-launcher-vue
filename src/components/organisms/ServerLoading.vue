<script setup lang="ts">
	// Imports
	import { ref } from 'vue'

	// Components
	import { Progress } from 'shadcn/progress'

	// Types
	import { Ref } from 'vue'

	// Props
	const props = defineProps<{ title: string }>()

	// Data
	const percents: Ref<number> = ref(33)
</script>

<template>
	<div class="flex flex-col gap-4 w-full h-full p-4 pl-2">
		<div class="w-full bg-background rounded-lg p-4">
			<h1 class="text-4xl font-bold text-white">{{ props.title }}</h1>
		</div>
		<div class="w-full grow bg-background rounded-lg p-4">
			<pre>123</pre>
		</div>
		<div class="w-full bg-background rounded-lg p-4">
			<div class="mb-4">
				<p>Загрузка</p>
				<p></p>
			</div>
			<Progress :model-value="percents" />
		</div>
	</div>
</template>
