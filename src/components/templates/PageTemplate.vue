<script setup lang="ts">
	import Titlebar from '@/components/organisms/TitleBar.vue'
	import Sidebar from '@/components/organisms/Sidebar.vue'
</script>

<template>
	<div class="flex h-full">
		<Titlebar />
		<Sidebar />
		<main class="relative w-full h-full">
			<slot />
		</main>
	</div>
</template>
