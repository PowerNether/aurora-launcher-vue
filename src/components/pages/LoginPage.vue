<script setup lang="ts">
	import { useUserStore } from '@/stores'

	import AuthTemplate from '@/components/templates/AuthTemplate.vue'
	import AuthForm from '@/components/organisms/AuthForm.vue'

	const userStore = useUserStore()

	const handleAuth = (username: string) => userStore.login(username.trim())
</script>

<template>
	<AuthTemplate>
		<div class="flex justify-center items-center h-full">
			<AuthForm @submit="handleAuth" />
		</div>
	</AuthTemplate>
</template>
