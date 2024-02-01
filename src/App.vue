<template>
  <Header />
  <Layout>
    <template #aside>
      <QuerySettings></QuerySettings>
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
import SettingSummary  from './components/SettingSummary.vue'
</script>

<style scoped ></style>