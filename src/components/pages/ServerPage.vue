<script setup lang="ts">
	// Imports
	import { ref, onMounted } from 'vue'
	import { useRoute } from 'vue-router'

	// Stores
	import { useServersStore } from '@/stores'

	// Components
	import PageTemplate from '@/components/templates/PageTemplate.vue'
	import BackgroundImage from '@/components/atoms/BackgroundImage.vue'
	import ServerContent from '@/components/organisms/ServerContent.vue'
	import ServerLoading from '@/components/organisms/ServerLoading.vue'

	// Types
	import { Ref } from 'vue'
	import { Server } from '@/types/stores/ServersStoreTypes'

	// Data
	const route = useRoute()
	const serversStore = useServersStore()
	const server: Ref<Server> = ref({ profileUUID: '', title: '', description: '', image: '', ip: '', port: 25565 })

	const loading: Ref<boolean> = ref(false)

	// Methods
	const playHandler = async () => {
		try {
			loading.value = true

			await window.ipcRenderer.invoke('game:launch', { uuid: server.value.profileUUID })
		} catch (error) {
			console.error('IPC Launch:', (error as Error).message)
		}
	}

	// Hooks
	onMounted(() => {
		server.value = serversStore.servers.find((item) => item?.profileUUID === route.params.id)
		server.value.description = 'Уникальный ванильный сервер Minecraft для настоящих искателей приключений!'
		server.value.image = '/server.png'
	})
</script>

<template>
	<PageTemplate>
		<BackgroundImage :src="server?.image || 'Server Image'" variant="faded">
			<template v-if="loading">
				<ServerLoading :title="server?.title || 'Server Name'" />
			</template>
			<template v-else>
				<ServerContent
					:title="server?.title || 'Server Name'"
					:description="server?.description || 'Server Description'"
					@play="playHandler"
				/>
			</template>
		</BackgroundImage>
	</PageTemplate>
</template>
