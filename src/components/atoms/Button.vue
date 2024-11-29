<script setup lang="ts">
	import { Button as ShadButton } from 'shadcn/button'

	const props = defineProps<{ class?: string; size?: string; variant?: string }>()
</script>

<template>
	<ShadButton :class="props.class" :size="props.size" :variant="props.variant" @click="$emit('click')">
		<slot />
	</ShadButton>
</template>
