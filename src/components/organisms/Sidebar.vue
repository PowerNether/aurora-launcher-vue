<script setup lang="ts">
	import Avatar from '@/components/atoms/Avatar.vue'

	import { Tabs, TabsContent, TabsList, TabsTrigger } from 'shadcn/tabs'
</script>

<template>
	<aside class="flex flex-col justify-between h-full p-4">
		<RouterLink to="/server/1">Vanilla</RouterLink>

		<Avatar shape="square" />
	</aside>
</template>
