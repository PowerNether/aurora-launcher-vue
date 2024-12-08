import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import ServerPage from '@/components/pages/ServerPage.vue'

import { useUserStore } from '@/stores'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginPage,
	},
	{
		path: '/server/:id',
		component: ServerPage,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach(async (to) => {
	const publicPages = ['/login']
	const authRequired = !publicPages.includes(to.path)
	const authStore = useUserStore()

	if (authRequired && !authStore.user) {
		return '/login'
	}
})

export default router
