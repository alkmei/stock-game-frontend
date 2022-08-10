import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {useUserStore} from "@/stores/user";

import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

useUserStore().checkIn()

app.config.globalProperties.$formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
app.mount('#app')
