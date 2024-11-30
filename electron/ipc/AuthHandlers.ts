import { api } from '../api/AuroraAPI'

type TAuthData = {
	login: string
	password: string
}

export class AuthHandlers {
	static async auth(_: unknown, { login, password }: TAuthData) {
		try {
			const response = await api.send('auth', { login, password })
			return { success: true, data: response }
		} catch (error) {
			console.error('Login error:', (error as Error).message)
			return { success: false, message: (error as Error).message }
		}
	}
}
