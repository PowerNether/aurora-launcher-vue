<script setup lang="ts">
	import { ref, type Ref } from 'vue'
	import { Button } from 'shadcn/button'
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'shadcn/card'
	import { Input } from 'shadcn/input'

	const emits = defineEmits<{
		(e: 'submit', login: string): void
	}>()

	const login: Ref<string> = ref('')

	const handleSubmit = (e: Event) => {
		e.preventDefault()
		emits('submit', login.value)
	}
</script>

<template>
	<Card class="w-full max-w-sm">
		<CardHeader>
			<CardTitle class="text-2xl">Авторизация</CardTitle>
			<CardDescription>Введите свой никнейм для игры</CardDescription>
		</CardHeader>
		<form @submit="handleSubmit">
			<CardContent class="grid gap-4">
				<Input id="username" type="text" placeholder="Никнейм" required v-model="login" />
			</CardContent>
			<CardFooter>
				<Button class="w-full" type="submit">Войти</Button>
			</CardFooter>
		</form>
	</Card>
</template>
