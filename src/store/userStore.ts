import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface User {
	accessToken: string
	userUUID: string
	username: string
}

export const useUserStore = defineStore('user', () => {
	const user: Ref<User> = ref({
		accessToken: '',
		userUUID: '',
		username: '',
	})

	const authUser = async (name: string) => {
		const response = await window.ipcRenderer.invoke('app:auth', { login: name, password: '' })
		user.value = response.data.result

		return true
	}

	return {
		user,
		authUser,
	}
})
