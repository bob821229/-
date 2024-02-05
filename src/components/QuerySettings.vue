<template>
    <CollapseWindows>
        <template #title>
            <span>埤圳查詢</span>
        </template>
        <template #content>
            <!-- v-show="isActive" -->
            <div class="block_outer search_select">
                <div class="row">
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="props.canal.association" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇管理處</option>
                                <option :value="d" v-for="d in props.departments">{{ d }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="props.canal.systemName" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇水源別</option>
                                <option :value="w" v-for="w in waterSourcesHandle">{{ w }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="props.canal.branch" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇分處</option>
                                <option :value="l" v-for="l in locationsHandle">{{ l }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="props.canal.subSystem1" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇系統1</option>
                                <option :value="s" v-for="s in system1sHandle">{{ s }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="props.canal.subSystem2" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇系統2</option>
                                <option :value="s" v-for="s in system2sHandle">{{ s }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="props.canal.workStation" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇工作站</option>
                                <option :value="w" v-for="w in workstationsHandle">{{ w }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="props.canal.canalName" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇埤圳別</option>
                                <option :value="p" v-for="p in pondNamesHandle">{{ p }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 reverse">
                        <div class="btn btn-success" @click="searchResult"><span>下一步</span></div>
                    </div>
                </div>
            </div>
        </template>
    </CollapseWindows>
</template>

<script setup lang="ts">

import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from 'axios';
import { ref, computed } from 'vue';
import Enumerable from 'linq';
// pinia
import { useCounterStore } from '@/stores/counter'
const { fetchDataStore } = useCounterStore();
import CollapseWindows from '@/components/CollapseWindows.vue'


const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    departments: {
        type: Array,
        default: () => ([])
    },
    canal: {
        type: Object,
        default: () => ({})
    }
})

const selectDepartment = ref("");
const selectWaterSource = ref("");
const selectLocation = ref("");
const selectSystem1 = ref("");
const selectSystem2 = ref("");
const selectWorkstation = ref("");
const selectPondName = ref("");


const waterSourcesHandle = computed(() => {
    let result = Enumerable.from(props.data).where(function (i) { return i.association === props.canal.association }).select(item => item.systemName)
        .distinct()
        .toArray();
    if (result.length > 0) {
        props.canal.systemName = result[0];
    }
    return result
})
const locationsHandle = computed(() => {
    let result = Enumerable.from(props.data).where(function (i) { return i.association === props.canal.association && i.systemName === props.canal.systemName }).select(item => item.branch)
        .distinct()
        .toArray();
    if (result.length > 0) {
        props.canal.branch = result[0];
    }
    return result
})
const system1sHandle = computed(() => {
    let result = Enumerable.from(props.data).where(function (i) { return i.association === props.canal.association && i.systemName === props.canal.systemName && i.branch === props.canal.branch }).select(item => item.subSystem1)
        .distinct()
        .toArray();
    if (result.length > 0) {
        props.canal.subSystem1 = result[0];
    }
    return result
})
const system2sHandle = computed(() => {
    let result = Enumerable.from(props.data).where(function (i) { return i.association === props.canal.association && i.systemName === props.canal.systemName && i.branch === props.canal.branch && i.subSystem1 === props.canal.subSystem1 }).select(item => item.subSystem2)
        .distinct()
        .toArray();

    if (result.length > 0) {
        props.canal.subSystem2 = result[0];
    }
    return result
})
const workstationsHandle = computed(() => {
    let result = Enumerable.from(props.data).where(function (i) { return i.association === props.canal.association && i.systemName === props.canal.systemName && i.branch === props.canal.branch && i.subSystem1 === props.canal.subSystem1 && i.subSystem2 === props.canal.subSystem2 }).select(item => item.workStation)
        .distinct()
        .toArray();

    if (result.length > 0) {
        props.canal.workStation = result[0];
    }
    return result
})
const pondNamesHandle = computed(() => {
    let result = Enumerable.from(props.data).where(function (i) { return i.association === props.canal.association && i.systemName === props.canal.systemName && i.branch === props.canal.branch && i.subSystem1 === props.canal.subSystem1 && i.subSystem2 === props.canal.subSystem2 && i.workStation === props.canal.workStation }).select(item => item.canalName)
        .distinct()
        .toArray();
    if (result.length > 0) {
        props.canal.canalName = result[0];
    }
    return result
})

const isActive = ref(true)
const searchResult = async () => {
    if (selectPondName.value == '') {
        return
    }
    // 把選取的資料送出
    const obj = {
        department: selectDepartment.value,
        waterSource: selectWaterSource.value,
        location: selectLocation.value,
        system1: selectSystem1.value,
        system2: selectSystem2.value,
        workstation: selectWorkstation.value,
        pondName: selectPondName.value
    }

    await fetchDataStore(obj)

    // selectDepartment.value='';
    // selectWaterSource.value='';
    // selectLocation.value='';
    // selectSystem1.value='';
    // selectSystem2.value='';
    // selectWorkstation.value='';
    // selectPondName.value=''
    // isActive.value=false;
}

</script>

<style scoped lang="scss">
.block_outer {
    background: #F4F5F7;
}

.reverse {
    display: flex;
    flex-direction: row-reverse;
}

.display_none {
    display: none;
}
</style>