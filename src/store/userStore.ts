import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface User {
	nickname: string
}

export const useUserStore = defineStore('user', () => {
	const user: Ref<User> = ref({
		nickname: '',
	})

	const changeNickname = (name: string) => {
		user.value.nickname = name
	}

	return {
		user,
		changeNickname,
	}
})
