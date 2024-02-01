import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AssociationTenDaysWaterConsumption from './AssociationTenDaysWaterConsumption.vue'


const app = createApp(AssociationTenDaysWaterConsumption)

app.use(createPinia())

app.mount('#app')
