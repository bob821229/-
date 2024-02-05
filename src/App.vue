<template>
  <Header />
  {{ canal }}
  <Layout>
    <template #aside>
      <!-- 階層查詢 -->
      <QuerySettings :data="parentData" :departments="parentDepartments" :canal="canal"></QuerySettings>
      <!-- 期作別選擇 -->
      <PeriodChoose :canal="canal"></PeriodChoose>
    </template>
    <template #main>
      <!-- 設定摘要&選定結果 -->
      <SettingSummary :canal="canal"></SettingSummary>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Layout from '@/components/Layout.vue'
import QuerySettings from './components/QuerySettings.vue'
import SettingSummary from './components/SettingSummary.vue'
import PeriodChoose from './components/PeriodChoose.vue'
import Enumerable from 'linq';
import axios from 'axios';

import { ref, onMounted, reactive } from 'vue';
const canal = reactive(
  {
    rid: 0,
    association: '',//管理處
    systemName: '',//水源別
    branch: '',//分處
    subSystem1: '',//系統1
    subSystem2: '',//系統2
    workStation: '',//工作站
    canalName: '',//埤圳別
    period: '1',//期別
    startYear: '',//起始年
    endYear: '',//結束年
  }
)

interface Department {
  association: string;
}
const parentData = ref([])
const parentDepartments = ref<Department[]>([]);
const getData = async () => {
  try {
    const response = await axios.get('public/data/canalStationList.json');
    parentData.value = response.data
    // 取得所有的管理處
    parentDepartments.value = Enumerable.from(response.data)
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