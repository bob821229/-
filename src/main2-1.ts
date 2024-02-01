import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ReservoirWaterInquiry from './ReservoirWaterInquiry.vue'


const app = createApp(ReservoirWaterInquiry)

app.use(createPinia())

app.mount('#app')
