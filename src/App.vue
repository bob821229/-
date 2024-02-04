<template>
  <Header />
  <Layout>
    <template #aside>
      <QuerySettings :data="data" :departments="departments"></QuerySettings>
    </template>
    <template #main>
      <SettingSummary></SettingSummary>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Layout from '@/components/Layout.vue'
import QuerySettings from './components/QuerySettings.vue'
import SettingSummary from './components/SettingSummary.vue'
import Enumerable from 'linq';
import axios from 'axios';

import { ref, onMounted } from 'vue';


const data = ref()
const departments = ref();
const getData = async () => {
  try {
    const response = await axios.get('public/data/canalStationList.json');
    data.value = response.data
    // 取得所有的管理處
    departments.value = Enumerable.from(response.data)
      .select(item => item.association)
      .distinct()
      .toArray();
  } catch (error) {
    console.error('連線失敗:', error);
  }
}

onMounted(() => {
  getData()
})
</script>

<style scoped ></style>