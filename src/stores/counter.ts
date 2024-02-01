import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const resDataStore = reactive({
    department: '',
    waterSource: '',
    location: '',
    system1: '',
    system2: '',
    workstation: '',
    pondName: ''
  })

  const fetchDataStore = async (obj) => {
    resDataStore.department = obj.department
    resDataStore.waterSource = obj.waterSource
    resDataStore.location = obj.location
    resDataStore.system1 = obj.system1
    resDataStore.system2 = obj.system2
    resDataStore.workstation = obj.workstation
    resDataStore.pondName = obj.pondName
  }
  return { fetchDataStore, resDataStore }
})
