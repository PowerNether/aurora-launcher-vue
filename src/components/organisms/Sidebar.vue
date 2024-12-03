<script setup lang="ts">
	import { onMounted } from 'vue'
	import { useUserStore, useServersStore } from '@/stores'
	import { Avatar } from 'shadcn/avatar'

	const { user } = useUserStore()
	const serversStore = useServersStore()

	onMounted(() => {
		serversStore.getServers()
	})
</script>

<template>
	<aside class="flex flex-col justify-between h-full p-4">
		<Avatar shape="square" />

		<template v-for="server in serversStore.servers" :key="server.profileUUID">
			<RouterLink :to="'/server/' + server.profileUUID">
				<Avatar shape="square">
					{{ server.title.slice(0, 1) }}
				</Avatar>
			</RouterLink>
		</template>

		<Avatar shape="square">{{ user?.username.slice(0, 1) || 'U' }}</Avatar>
	</aside>
</template>
