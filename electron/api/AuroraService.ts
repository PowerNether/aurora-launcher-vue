import WebSocketService from './WebSocketService'

class AuroraService {
	public async authorization(params: object) {
		try {
			const response = await WebSocketService.sendMessage({ method: 'auth', params })
			return response
		} catch (error) {
			return { error: (error as Error).message }
		}
	}

	public async servers() {
		try {
			const response = await WebSocketService.sendMessage({ method: 'servers' })
			return { success: true, data: response }
		} catch (error) {
			return { success: false, message: (error as Error).message }
		}
	}
}

export default new AuroraService()
