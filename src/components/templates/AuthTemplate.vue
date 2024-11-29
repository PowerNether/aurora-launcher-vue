<script setup lang="ts">
	import Titlebar from '@/components/organisms/Titlebar.vue'
</script>

<template>
	<div class="flex h-full">
		<Titlebar />
		<main class="w-full h-full">
			<slot />
		</main>
	</div>
</template>
