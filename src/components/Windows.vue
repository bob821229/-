<template>
      <div class="wrap">
        <div class="header">
            <slot name="title"></slot>
        </div>
        <div class="content">
      <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    border: 1px solid #5BA875;
    background: #F4F5F7;
}

.header {
    padding: 11px 20px;
    border-radius: 20px;
    background: #5BA875;
    outline: 1px solid #5BA875;
    color: #fff;
    display: flex;
    justify-content:space-between;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // padding: 20px;
}
</style>