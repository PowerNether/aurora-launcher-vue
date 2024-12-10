import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useToast } from 'shadcn/toast/use-toast'
import { Response } from '@/types/response.type'

type User = {
	username: string
	userUUID: string
	accessToken: string
	isAlex?: boolean
	skinUrl?: string
	capeUrl?: string
}

export const useUserStore = defineStore('user', () => {
	const router = useRouter()
	const { toast } = useToast()

	const user: Ref<User | null> = ref(JSON.parse(localStorage.getItem('user') as string))

	const login = async (login: string): Promise<void> => {
		try {
			const response: Response<User> = await window.ipcRenderer.invoke('api:auth', { login, password: '' })
			if (response?.error) throw new Error('Произошла ошибка, попробуйте позже')

			const result: User = response.result

			user.value = result
			localStorage.setItem('user', JSON.stringify(result))
			toast({ title: 'Авторизация успешна.', description: 'Добро пожаловать на JabaPirate!' })
			router.push('/')
		} catch (error) {
			toast({ title: 'Ошибка авторизации.', description: (error as Error).message, variant: 'destructive' })
		}
	}

	const logout = (): void => {
		user.value = null
		localStorage.removeItem('user')
		router.push('/login')
	}

	return { user, login, logout } as const
})
