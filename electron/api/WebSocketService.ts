import WebSocket from 'ws'
import { nanoid } from 'nanoid'
import { config } from '../config/config'

class WebSocketService {
	private socket: WebSocket | undefined
	private messages: Map<string, (response: unknown) => void>

	constructor() {
		this.messages = new Map()
		this.initialize()
	}

	private initialize() {
		this.socket = new WebSocket(config.server)
		this.socket.on('close', () => setTimeout(() => this.initialize(), 5000))
		this.socket.on('message', (data: WebSocket.RawData) => this.handleMessage(data))
	}

	private get socketIsConnected() {
		return this.socket?.readyState === WebSocket.OPEN
	}

	private handleMessage(data: WebSocket.RawData) {
		const payload = JSON.parse(data.toString())

		if (this.messages.has(payload.id)) {
			const resolve = this.messages.get(payload.id)!
			this.messages.delete(payload.id)

			resolve(payload)
		}
	}

	public sendMessage(args: object) {
		return new Promise((resolve, reject) => {
			if (!this.socketIsConnected) reject(new Error('WS: Connection is not opened'))

			const id = nanoid()
			const data = { id, ...args }
			this.messages.set(id, resolve)
			this.socket?.send(JSON.stringify(data))
		})
	}
}

export default new WebSocketService()
