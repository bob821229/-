<template>
    <CollapseWindows>
        <template #title>
            <span>期作年度條件</span>
        </template>
        <template #content>
            <div class="block_outer">
                <div class="row">
                    <div class="col-12">
                        <span>
                            期作:
                        </span>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="inlineCheckbox1" value="1"
                                v-model="canal.period">
                            <label class="form-check-label" for="inlineCheckbox1">一期作</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="inlineCheckbox2" value="2"
                                v-model="canal.period">
                            <label class="form-check-label" for="inlineCheckbox2">二期作</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="inlineCheckbox3" value="0"
                                v-model="canal.period">
                            <label class="form-check-label" for="inlineCheckbox3">合計</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <span>
                            年度:
                        </span>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example"
                            v-model="canal.startYear">
                            <option value="" disabled>請選擇</option>
                            <option value="109">109</option>
                            <option value="110">110</option>
                            <option value="111">111</option>
                        </select>
                        至
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example"
                            v-model="canal.endYear">
                            <option value="" disabled>請選擇</option>
                            <option value="109">109</option>
                            <option value="110">110</option>
                            <option value="111">111</option>
                        </select>
                    </div>
                    <div class="col-12 fdrr">
                        <div class="btn btn-success"><span>查詢</span></div>
                    </div>
                </div>
            </div>
        </template>
    </CollapseWindows>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CollapseWindows from '@/components/CollapseWindows.vue';
const props = defineProps({
    canal: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style scoped lang="scss">
.block_outer {
    background: #F4F5F7;
}

.form-select {
    width: 200px;
    margin: 0;
}



.col-12 {
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
}

.fdrr {
    display: flex;
    flex-direction: row-reverse;
}
</style>