<script setup lang="ts">
	import Sidebar from '@/components/organisms/Sidebar.vue'
</script>

<template>
	<div class="flex h-full">
		<Sidebar />
		<main class="w-full h-full">
			<slot />
		</main>
	</div>
</template>
