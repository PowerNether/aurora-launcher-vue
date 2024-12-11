import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
	const loader: Ref<{ status: boolean; message: string | null }> = ref({
		status: false,
		message: null,
	})

	const showLoader = (message?: string) => {
		loader.value.message = message || null
		loader.value.status = true
	}

	const hideLoader = () => {
		loader.value.status = false
		loader.value.message = null
	}

	return { loader, showLoader, hideLoader } as const
})
