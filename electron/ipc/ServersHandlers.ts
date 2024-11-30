import { api } from '../api/AuroraAPI'

export class ServersHandlers {
	static async getServers(_: unknown) {
		try {
			const response = await api.send('servers', {})
			return { success: true, data: response }
		} catch (error) {
			console.error('Servers error:', (error as Error).message)
			return { success: false, message: (error as Error).message }
		}
	}
}
