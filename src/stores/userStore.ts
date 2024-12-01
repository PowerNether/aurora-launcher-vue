import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'
import { User, UserApiResponse, UserAuthenticationFunction } from '@/types/stores/UserStoreTypes'

export const useUserStore = defineStore('user', () => {
	const user: Ref<User | null> = ref(null)

	const authUser: UserAuthenticationFunction = async (login) => {
		try {
			const { status, data }: UserApiResponse = await window.ipcRenderer.invoke('app:auth', {
				login,
				password: '',
			})

			if (status) {
				user.value = data.result
			}

			return status
		} catch (error) {
			console.error('Authentication failed:', (error as Error).message)
			return false
		}
	}

	return { user, authUser }
})
