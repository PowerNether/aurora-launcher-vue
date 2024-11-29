import { createApp } from 'vue'

import App from '@/app/App.vue'
import router from '@/app/core/routes'

import '@/app/core/index.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
