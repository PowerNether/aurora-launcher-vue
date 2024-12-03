import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'
import { User, UserApiResponse, UserAuthenticationFunction } from '@/types/stores/UserStoreTypes'

export const useUserStore = defineStore('user', () => {
	const user: Ref<User | null> = ref(null)

	const userAuthorize: UserAuthenticationFunction = async (login) => {
		try {
			const { success, data }: UserApiResponse = await window.ipcRenderer.invoke('app:auth', {
				login,
				password: '',
			})

			if (success) {
				user.value = data.result
				return success
			} else {
				new Error('Authication is failed')
				return false
			}
		} catch (error) {
			console.error('IPC:', (error as Error).message)
			return false
		}
	}

	return { user, userAuthorize }
})
