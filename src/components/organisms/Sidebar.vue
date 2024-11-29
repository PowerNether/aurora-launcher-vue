<script setup lang="ts">
	import { useUserStore } from '@/store/userStore'
	import Avatar from '@/components/atoms/Avatar.vue'

	const { user } = useUserStore()
</script>

<template>
	<aside class="flex flex-col justify-between h-full p-4">
		<Avatar shape="square" />

		<RouterLink to="/server/1">
			<img src="@/assets/icon_grass.webp" alt="" class="w-10 h-10 object-contain" />
		</RouterLink>

		<Avatar shape="square">{{ user.nickname.slice(0, 1) }}</Avatar>
	</aside>
</template>
