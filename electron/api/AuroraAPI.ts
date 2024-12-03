import WebSocket from 'ws'
import { nanoid } from 'nanoid'

// Aurora RPC Itefaces
interface IAuroraAPIRequest {
	id?: number | string
	method: string
	params?: object | Array<unknown>
}
interface IAuroraAPIResponse {
	id: number | string
	result: object | Array<unknown>
}
interface IAuroraAPIResponseError {
	id: number | string
	result: object | Array<unknown>
}

class AuroraAPI {
	private url: string
	private socket: WebSocket | null = null
	private messages: Map<string, (response: IAuroraAPIResponse | IAuroraAPIResponseError) => void> = new Map()

	constructor(url: string) {
		this.url = url

		this.connect()
	}

	private connect() {
		this.socket = new WebSocket(this.url)

		this.socket.on('close', () => setTimeout(() => this.connect(), 5000))
		this.socket.on('message', (data: WebSocket.RawData) => this.handleMessage(data))
	}

	private get checkSocketConnection() {
		return this.socket?.readyState === WebSocket.OPEN
	}

	public send(method: string, params: object) {
		return new Promise((resolve, reject) => {
			const id = nanoid()
			const request: IAuroraAPIRequest = { id, method, params }

			if (this.checkSocketConnection) {
				this.messages.set(id, resolve)
				this.socket?.send(JSON.stringify(request))
			} else {
				reject(new Error('WebSocket: no response from server'))
			}
		})
	}

	private handleMessage(data: WebSocket.RawData) {
		const response: string = data.toString()
		const responseJSON = JSON.parse(response)

		if (this.messages.has(responseJSON.id)) {
			const resolve = this.messages.get(responseJSON.id)!
			this.messages.delete(responseJSON.id)

			resolve(responseJSON)
		}
	}
}

export const api = new AuroraAPI('ws://192.168.1.202:1370')
