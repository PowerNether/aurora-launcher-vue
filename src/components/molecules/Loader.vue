<script setup lang="ts">
	// Stores
	import { useAppStore } from '@/stores'

	// Components
	import { LoaderCircle } from 'lucide-vue-next'

	const appStore = useAppStore()
</script>

<template>
	<div
		:style="appStore.loader.status ? 'opacity: 1' : 'opacity: 0; pointer-events: none;'"
		class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-opacity"
		style="background-color: #00000099"
	>
		<LoaderCircle :size="96" class="animate-spin" />
		<template v-if="appStore.loader.message">
			<p class="font-medium mt-4">{{ appStore.loader.message }}</p>
		</template>
	</div>
</template>
