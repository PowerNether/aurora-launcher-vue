<script setup lang="ts">
	import { useRouter } from 'vue-router'
	import { useUserStore } from '@/stores'
	import { useToast } from 'shadcn/toast/use-toast'

	import AuthTemplate from '@/components/templates/AuthTemplate.vue'
	import AuthForm from '@/components/organisms/AuthForm.vue'

	const router = useRouter()
	const { userAuthorize } = useUserStore()
	const { toast } = useToast()

	// TODO: Переработвать авторизацию
	const handleAuth = async (login: string) => {
		if (login.trim().length < 2) {
			toast({ title: 'Ошибка авторизации.', description: 'Никнейм слишком короткий.', variant: 'destructive' })
			return
		}

		const isAuthed: boolean = await userAuthorize(login)

		if (isAuthed) {
			toast({ title: 'Авторизация успешна.', description: 'Добро пожаловать на JabaPirate!' })
			router.push('/')
		} else {
			toast({
				title: 'Ошибка авторизации.',
				description: 'Пожалуйста, убедись, что введенные данные верны.',
				variant: 'destructive',
			})
		}
	}
</script>

<template>
	<AuthTemplate>
		<div class="flex justify-center items-center h-full">
			<AuthForm @submit="handleAuth" />
		</div>
	</AuthTemplate>
</template>
