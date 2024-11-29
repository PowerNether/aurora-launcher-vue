<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import { useRoute } from 'vue-router'

	import PageTemplate from '@/components/templates/PageTemplate.vue'
	import BackgroundImage from '@/components/atoms/BackgroundImage.vue'
	import ServerContent from '@/components/organisms/ServerContent.vue'

	const route = useRoute()
	const serverTitle = ref('')
	const serverDescription = ref('')
	const serverImage = ref('')

	onMounted(() => {
		const serverId = route.params.id
		serverTitle.value = `Server ${serverId}`
		serverDescription.value = 'description'
		serverImage.value = 'https://via.placeholder.com/1920x1080'
	})
</script>

<template>
	<PageTemplate>
		<BackgroundImage :src="serverImage">
			<ServerContent
				:title="serverTitle"
				:description="serverDescription"
			/>
		</BackgroundImage>
	</PageTemplate>
</template>
