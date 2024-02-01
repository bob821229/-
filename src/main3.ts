import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HistoryStopsIrrigation from './HistoryStopsIrrigation.vue'


const app = createApp(HistoryStopsIrrigation)

app.use(createPinia())

app.mount('#app')
