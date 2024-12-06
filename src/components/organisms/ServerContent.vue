<script lang="ts" setup>
	import { Button } from 'shadcn/button'
	import ServerInfo from '@/components/molecules/ServerInfo.vue'

	const props = defineProps<{ title: string; description: string }>()
</script>

<template>
	<div class="flex flex-col justify-center items-start p-4 pl-2 space-y-6 h-full">
		<ServerInfo :title="props.title" :description="props.description" />
		<Button size="lg" @click="$emit('play')">Играть</Button>
	</div>
</template>
