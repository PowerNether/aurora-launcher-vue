<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import { useRoute } from 'vue-router'
	import { useServersStore } from '@/store'

	import PageTemplate from '@/components/templates/PageTemplate.vue'
	import BackgroundImage from '@/components/atoms/BackgroundImage.vue'
	import ServerContent from '@/components/organisms/ServerContent.vue'

	const route = useRoute()
	const { servers } = useServersStore()

	const serverTitle = ref('')
	const serverDescription = ref('')
	const serverImage = ref('')

	onMounted(() => {
		const serverIndex = servers.findIndex((item) => {
			return item.profileUUID === route.params.id
		})

		serverTitle.value = servers[serverIndex].title
		serverDescription.value =
			'Уникальный ванильный сервер Minecraft для настоящих искателей приключений! Здесь тебя ждёт атмосфера классического Minecraft без модификаций, где каждое решение имеет значение.'
		serverImage.value = '/server.png'
	})
</script>

<template>
	<PageTemplate>
		<BackgroundImage :src="serverImage" variant="faded">
			<ServerContent :title="serverTitle" :description="serverDescription" />
		</BackgroundImage>
	</PageTemplate>
</template>
