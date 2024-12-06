<script setup lang="ts">
	import { onMounted } from 'vue'
	import { useUserStore, useServersStore } from '@/stores'
	import { Avatar } from 'shadcn/avatar'

	const userStore = useUserStore()
	const serversStore = useServersStore()

	onMounted(() => {
		serversStore.getServers()
	})
</script>

<template>
	<aside class="flex flex-col justify-between p-4 m-4 mr-2 bg-background rounded-lg">
		<Avatar shape="square" />

		<template v-for="server in serversStore.servers" :key="server.profileUUID">
			<RouterLink :to="'/server/' + server?.profileUUID">
				<Avatar shape="square">
					{{ server?.title.slice(0, 1) }}
				</Avatar>
			</RouterLink>
		</template>

		<Avatar shape="square">{{ userStore.user?.username.slice(0, 1) || 'U' }}</Avatar>
	</aside>
</template>
