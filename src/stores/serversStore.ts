import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { Server, ServersApiResponse, ServersGetFunction } from '@/types/stores/ServersStoreTypes'

export const useServersStore = defineStore('servers', () => {
	const servers: Ref<Array<Server> | Array<void>> = ref([])

	const getServers: ServersGetFunction = async () => {
		const { data }: ServersApiResponse = await window.ipcRenderer.invoke('app:servers')
		servers.value = data.result
	}

	return { servers, getServers }
})
