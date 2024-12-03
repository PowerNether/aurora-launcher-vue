<script lang="ts" setup>
	import { Button } from 'shadcn/button'
	import ServerInfo from '@/components/molecules/ServerInfo.vue'

	const props = defineProps<{ title: string; description: string }>()
	const play = () => {
		console.log('Игра запущена!')
	}
</script>

<template>
	<div class="flex flex-col justify-center items-start p-16 space-y-6 h-full">
		<ServerInfo :title="props.title" :description="props.description" />
		<Button size="lg" @click="play">Играть</Button>
	</div>
</template>
