<template>
  <div class="wrap">
    <div class="header" :class="{ 'active': !isActive }" @click="isActive = !isActive">
      <slot name="title"></slot>
      <slot name="icon">
        <i class="bi bi-chevron-down" v-if="!isActive"></i>
        <i class="bi bi-chevron-up" v-if="isActive"></i>
      </slot>
    </div>
    <div class="content" v-show="isActive">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isActive = ref(true);
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #5BA875;
  background: #F4F5F7;
  margin-bottom: 20px;
}

.header {
  padding: 11px 20px;
  border-radius: 20px;
  background: #5BA875;
  outline: 1px solid #5BA875;
  color: #fff;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}

.active {
  background: #fff;
  color: #5BA875;

}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
</style>