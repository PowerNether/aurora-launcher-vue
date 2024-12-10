import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'shadcn/toast/use-toast'
import { Response } from '@/types/response.type'

type Server = {
	ip: string
	port: number
	title: string
	profileUUID: string
}

export const useServersStore = defineStore('servers', () => {
	const { toast } = useToast()

	const servers: Ref<Server | object> = ref({})

	const fatchServers = async (): Promise<void> => {
		try {
			const response: Response<Server[]> = await window.ipcRenderer.invoke('api:servers')
			if (response?.error) throw new Error('Произошла ошибка, попробуйте позже')

			const result: Server[] = response.result

			servers.value = result
		} catch (error) {
			toast({
				title: 'Ошибка получения серверов.',
				description: (error as Error).message,
				variant: 'destructive',
			})
		}
	}

	return { servers, fatchServers } as const
})
