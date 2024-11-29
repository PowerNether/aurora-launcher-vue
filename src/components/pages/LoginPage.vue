<script setup lang="ts">
	import { ref } from 'vue'

	import { useRouter } from 'vue-router'
	import { useUserStore } from '@/store/userStore'

	import AuthTemplate from '@/components/templates/AuthTemplate.vue'

	import { Button } from 'shadcn/button'
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'shadcn/card'
	import { Input } from 'shadcn/input'

	const router = useRouter()
	const { changeNickname } = useUserStore()

	const nickname = ref('')

	const handleModel = (value: string) => {
		nickname.value = value
	}

	const handleButton = () => {
		changeNickname(nickname.value)

		router.push('/')
	}
</script>

<template>
	<AuthTemplate>
		<div class="flex justify-center items-center h-full">
			<Card class="w-full max-w-sm">
				<CardHeader>
					<CardTitle class="text-2xl">Авторизация</CardTitle>
					<CardDescription>Введите свой никнейм для игры</CardDescription>
				</CardHeader>
				<CardContent class="grid gap-4">
					<Input
						id="username"
						type="text"
						placeholder="Никнейм"
						required
						:modelValue="nickname"
						@update:modelValue="handleModel"
					/>
				</CardContent>
				<CardFooter>
					<Button class="w-full" @click="handleButton">Войти</Button>
				</CardFooter>
			</Card>
		</div>
	</AuthTemplate>
</template>
