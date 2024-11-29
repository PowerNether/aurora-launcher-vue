<script lang="ts" setup>
	const props = defineProps<{ src: string; variant: 'faded' | undefined }>()
</script>

<template>
	<div class="w-full h-full">
		<div
			:style="{ backgroundImage: `url(${props.src})` }"
			class="absolute top-0 left-0 -z-[1] w-full h-full bg-cover bg-center"
		>
			<div style="background-color: #00000099" class="absolute top-0 left-0 w-full h-full" />
		</div>
		<slot />
	</div>
</template>
