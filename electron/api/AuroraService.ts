import WebSocketService from './WebSocketService'

class AuroraService {
	public async authorization(payload: object) {
		try {
			const response = await WebSocketService.sendMessage({ method: 'auth', ...payload })
			return { success: true, data: response }
		} catch (error) {
			return { success: false, message: (error as Error).message }
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
