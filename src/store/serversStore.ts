import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

type TServerData = {
	ip: string
	port: number
	profileUUID: string
	title: string
}

export const useServersStore = defineStore('servers', () => {
	const servers: Ref<Array<TServerData>> = ref([])

	const getServers = async () => {
		const response = await window.ipcRenderer.invoke('app:servers')
		console.log(response)
		servers.value = response.data.result
	}

	return {
		servers,
		getServers,
	}
})
