<template>
    <div class="row">
        <div class="col-8">
            <slot name="aside">Default Aside</slot>
        </div>
        <div class="col-4">
            <slot name="main">Default Main</slot>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.row {
    padding: 20px;
}
</style>