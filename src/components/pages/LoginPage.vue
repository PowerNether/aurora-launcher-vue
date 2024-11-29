<script setup lang="ts">
	import { useRouter } from 'vue-router'

	import AuthTemplate from '@/components/templates/AuthTemplate.vue'

	import { Button } from 'shadcn/button'
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
	} from 'shadcn/card'
	import { Input } from 'shadcn/input'

	const router = useRouter()

	const handleButton = () => {
		router.push('/')
	}
</script>

<template>
	<AuthTemplate>
		<Card class="w-full max-w-sm">
			<CardHeader>
				<CardTitle class="text-2xl">Авторизация</CardTitle>
				<CardDescription>
					Введите свой никнейм для игры
				</CardDescription>
			</CardHeader>
			<CardContent class="grid gap-4">
				<Input
					id="username"
					type="text"
					placeholder="Никнейм"
					required
				/>
			</CardContent>
			<CardFooter>
				<Button class="w-full" @click="handleButton">Войти</Button>
			</CardFooter>
		</Card>
	</AuthTemplate>
</template>
