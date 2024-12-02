import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import ServerPage from '@/components/pages/ServerPage.vue'

import { useUserStore } from '@/stores/userStore'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
		beforeEnter: () => {
			const { user } = useUserStore()

			if (user === null) {
				return { name: 'Login' }
			}
		},
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

export default router
