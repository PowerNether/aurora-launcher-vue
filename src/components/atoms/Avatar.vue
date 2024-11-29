<script setup lang="ts">
	import { Avatar as ShadAvatar } from 'shadcn/avatar'

	const props = defineProps<{
		class?: string
		size?: string
		shape?: string
	}>()
</script>

<template>
	<ShadAvatar :class="props.class" :size="props.size" :shape="props.shape" @click="$emit('click')">
		<slot />
	</ShadAvatar>
</template>
