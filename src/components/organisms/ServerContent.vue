<script lang="ts" setup>
	import ServerInfo from '@/components/molecules/ServerInfo.vue'
	import Button from '@/components/atoms/Button.vue'

	const props = defineProps<{ title: string; description: string }>()
	const play = () => {
		console.log('Игра запущена!')
	}
</script>

<template>
	<div class="flex flex-col justify-center items-start p-4 space-y-6 h-full">
		<ServerInfo :title="props.title" :description="props.description" />
		<Button size="lg" @click="play">Играть</Button>
	</div>
</template>
