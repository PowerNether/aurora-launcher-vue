<script setup lang="ts">
	import { Toaster } from 'shadcn/toast'
	import Loader from '@/components/molecules/Loader.vue'
</script>

<template>
	<RouterView />
	<Toaster />
	<Loader />
</template>
