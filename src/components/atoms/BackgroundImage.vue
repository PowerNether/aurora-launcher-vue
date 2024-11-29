<script lang="ts" setup>
	const props = defineProps<{ src: string }>()
</script>

<template>
	<div
		:style="{ backgroundImage: `url(${props.src})` }"
		class="w-full h-full bg-cover bg-center"
	>
		<slot />
	</div>
</template>
