<script lang="ts" setup>
	const props = defineProps<{ title: string; description: string }>()
</script>

<template>
	<div class="space-y-4">
		<h1 class="text-4xl font-bold text-white">{{ props.title }}</h1>
		<p class="text-lg text-white max-w-md text-pretty">{{ props.description }}</p>
	</div>
</template>
