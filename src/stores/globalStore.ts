import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
	const isLoading: Ref<Boolean> = ref(false)

	return { isLoading }
})
