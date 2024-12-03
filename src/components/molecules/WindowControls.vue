<script setup lang="ts">
	import { Button } from 'shadcn/button'
	import { Minus, X } from 'lucide-vue-next'
</script>

<template>
	<div class="flex space-x-1 ml-auto">
		<Button size="icon" variant="ghost" @click="$emit('collapse')">
			<Minus :size="20" />
		</Button>
		<Button size="icon" variant="ghost" @click="$emit('close')">
			<X :size="20" />
		</Button>
	</div>
</template>
