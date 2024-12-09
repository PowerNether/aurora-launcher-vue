<script setup lang="ts">
	import { onMounted } from 'vue'
	import { useUserStore, useServersStore } from '@/stores'
	import { Avatar } from 'shadcn/avatar'
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuTrigger,
	} from 'shadcn/dropdown-menu'

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
				<Avatar shape="square">{{ server?.title.slice(0, 1) }}</Avatar>
			</RouterLink>
		</template>

		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar shape="square">{{ userStore.user?.username.slice(0, 1) || 'U' }}</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent side="right" :side-offset="24" align="end" :align-offset="-16">
				<DropdownMenuLabel>
					{{ userStore.user?.username }}
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Настройки</DropdownMenuItem>
				<DropdownMenuItem @click="userStore.logout">Выйти</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</aside>
</template>
