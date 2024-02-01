import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ReservoirTenDaysWaterConsumption from './ReservoirTenDaysWaterConsumption.vue'


const app = createApp(ReservoirTenDaysWaterConsumption)

app.use(createPinia())

app.mount('#app')
