import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AssociationHistoryArea from './AssociationHistoryArea.vue'


const app = createApp(AssociationHistoryArea)

app.use(createPinia())

app.mount('#app')
