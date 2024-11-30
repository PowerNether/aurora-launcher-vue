import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useServersStore = defineStore('servers', () => {
	const servers: Ref<Array<unknown>> = ref([])

	const getServers = async () => {
		const response = await window.ipcRenderer.invoke('app:servers')
		servers.value = response.data.result
	}

	return {
		servers,
		getServers,
	}
})
