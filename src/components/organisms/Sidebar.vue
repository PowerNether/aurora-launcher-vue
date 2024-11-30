<script setup lang="ts">
	import { onMounted } from 'vue'
	import { useUserStore, useServersStore } from '@/store'
	import Avatar from '@/components/atoms/Avatar.vue'

	const { user } = useUserStore()
	const { servers, getServers } = useServersStore()

	onMounted(async () => {
		getServers()
	})
</script>

<template>
	<aside class="flex flex-col justify-between h-full p-4">
		<Avatar shape="square" />

		<template v-for="server in servers" :key="server.profileUUID">
			<RouterLink :to="'/server/' + server.profileUUID">
				<Avatar shape="square">
					{{ server.title.slice(0, 1) }}
				</Avatar>
			</RouterLink>
		</template>

		<Avatar shape="square">{{ user.username.slice(0, 1) }}</Avatar>
	</aside>
</template>
