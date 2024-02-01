import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ReservoirHistoryArea from './ReservoirHistoryArea.vue'


const app = createApp(ReservoirHistoryArea)

app.use(createPinia())

app.mount('#app')
