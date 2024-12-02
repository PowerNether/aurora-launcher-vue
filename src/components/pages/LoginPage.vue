<script setup lang="ts">
	import { useRouter } from 'vue-router'
	import { useUserStore } from '@/stores'

	import AuthTemplate from '@/components/templates/AuthTemplate.vue'
	import AuthForm from '@/components/organisms/AuthForm.vue'

	const router = useRouter()
	const { authUser } = useUserStore()

	const handleAuth = async (login: string) => {
		const isAuthed: boolean = await authUser(login)
		if (isAuthed) router.push('/')
	}
</script>

<template>
	<AuthTemplate>
		<div class="flex justify-center items-center h-full">
			<AuthForm @submit="handleAuth" />
		</div>
	</AuthTemplate>
</template>
