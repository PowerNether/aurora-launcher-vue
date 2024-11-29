<script setup lang="ts">
	import WindowControls from '@/components/molecules/WindowControls.vue'

	const collapse = () => {
		window.ipcRenderer?.collapse()
	}

	const close = () => {
		window.ipcRenderer?.close()
	}
</script>

<template>
	<div class="fixed top-0 left-0 z-[1] flex w-full p-2" style="-webkit-app-region: drag">
		<WindowControls style="-webkit-app-region: no-drag" @collapse="collapse" @close="close" />
	</div>
</template>
