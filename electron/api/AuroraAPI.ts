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
	private socket: WebSocket
	private messages: Map<string, (response: IAuroraAPIResponse | IAuroraAPIResponseError) => void> = new Map()

	constructor(url: string) {
		this.socket = new WebSocket(url)
		this.socket.on('message', (data: WebSocket.RawData) => this.sockerHandleMessage(data))
	}

	public send(method: string, params: object) {
		return new Promise((resolve, reject) => {
			const id = nanoid()
			const request: IAuroraAPIRequest = { id, method, params }

			this.messages.set(id, resolve)

			this.socket.send(JSON.stringify(request))

			setTimeout(() => {
				if (this.messages.has(id)) {
					this.messages.delete(id)
				}

				reject(new Error('Timeout: no response from server'))
			}, 10000)
		})
	}

	private sockerHandleMessage(data: WebSocket.RawData) {
		const response: string = data.toString()
		const responseJSON = JSON.parse(response)

		if (this.messages.has(responseJSON.id)) {
			const resolve = this.messages.get(responseJSON.id)!
			this.messages.delete(responseJSON.id)

			resolve(responseJSON)
		}
	}
}

export const api = new AuroraAPI('ws://192.168.1.202:1370/ws')
