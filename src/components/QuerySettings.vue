<template>
    <Windows>
        <template #title>
            <span>埤圳查詢</span>
            <i class="bi bi-chevron-down" v-if="isActive"></i>
            <i class="bi bi-chevron-up" v-if="!isActive"></i>
        </template>
        <template #content>
            <!-- v-show="isActive" -->
            <div class="block_outer search_select">
                <div class="row">
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="selectDepartment" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇管理處</option>
                                <option :value="d" v-for="d in departments">{{ d }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="selectWaterSource" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇水源別</option>
                                <option :value="w" v-for="w in waterSourcesHandle">{{ w }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="selectLocation" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇分處</option>
                                <option :value="l" v-for="l in locationsHandle">{{ l }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="selectSystem1" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇系統1</option>
                                <option :value="s" v-for="s in system1sHandle">{{ s }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="selectSystem2" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇系統2</option>
                                <option :value="s" v-for="s in system2sHandle">{{ s }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="selectWorkstation" id="managementSelect" class="form-select mt-1"
                                aria-label="Default select example">
                                <option value="" disabled selected>選擇工作站</option>
                                <option :value="w" v-for="w in workstationsHandle">{{ w }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="option_outer sm_form_width">
                            <select v-model="selectPondName" id="managementSelect" class="form-select mt-1"
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
    </Windows>
</template>

<script setup lang="ts">

import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from 'axios';
import { ref, onMounted, computed, reactive } from 'vue';
import Enumerable from 'linq';
// pinia
import { useCounterStore } from '@/stores/counter'
const { fetchDataStore } = useCounterStore();
import Windows from '@/components/Windows.vue'

const data = ref()
const selectDepartment = ref("");
const departments = ref([]);
const selectWaterSource = ref("");
const selectLocation = ref("");
const selectSystem1 = ref("");
const selectSystem2 = ref("");
const selectWorkstation = ref("");
const selectPondName = ref("");
const getData = async () => {
    try {
        const response = await axios.get('public/data/canalStationList.json');
        data.value = response.data
        console.log(response.data)
        // 取得所有的管理處
        departments.value = Enumerable.from(response.data)
            .select(item => item.association)
            .distinct()
            .toArray();
    } catch (error) {
        console.error('連線失敗:', error);
    }
}

const waterSourcesHandle = computed(() => {
    let result = Enumerable.from(data.value).where(function (i) { return i.association === selectDepartment.value && i.systemName != null }).select(item => item.systemName)
        .distinct()
        .toArray();
    if (result.length == 1) {
        selectWaterSource.value = result[0];
    }
    return result
})
const locationsHandle = computed(() => {
    let result = Enumerable.from(data.value).where(function (i) { return i.association === selectDepartment.value && i.systemName === selectWaterSource.value && i.branch != null }).select(item => item.branch)
        .distinct()
        .toArray();
    if (result.length == 1) {
        selectLocation.value = result[0];
    }
    return result
})
const system1sHandle = computed(() => {
    let result = Enumerable.from(data.value).where(function (i) { return i.association === selectDepartment.value && i.systemName === selectWaterSource.value && i.branch === selectLocation.value && i.subSystem1 != null }).select(item => item.subSystem1)
        .distinct()
        .toArray();
    if (result.length == 1) {
        selectSystem1.value = result[0];
    }
    return result
})
const system2sHandle = computed(() => {
    let result = Enumerable.from(data.value).where(function (i) { return i.association === selectDepartment.value && i.systemName === selectWaterSource.value && i.branch === selectLocation.value && i.subSystem1 === selectSystem1.value && i.subSystem2 != null }).select(item => item.subSystem2)
        .distinct()
        .toArray();

    if (result.length == 1) {
        selectSystem2.value = result[0];
    }
    return result
})
const workstationsHandle = computed(() => {
    let result = Enumerable.from(data.value).where(function (i) { return i.association === selectDepartment.value && i.systemName === selectWaterSource.value && i.branch === selectLocation.value && i.subSystem1 === selectSystem1.value && i.subSystem2 === selectSystem2.value && i.workStation != null }).select(item => item.workStation)
        .distinct()
        .toArray();

    if (result.length == 1) {
        selectWorkstation.value = result[0];
    }
    return result
})
const pondNamesHandle = computed(() => {
    let result = Enumerable.from(data.value).where(function (i) { return i.association === selectDepartment.value && i.systemName === selectWaterSource.value && i.branch === selectLocation.value && i.subSystem1 === selectSystem1.value && i.subSystem2 === selectSystem2.value && i.workStation === selectWorkstation.value && i.canalName != null }).select(item => item.canalName)
        .distinct()
        .toArray();
    if (result.length == 1) {
        selectWorkstation.value = result[0];
    }
    return result
})
const result = reactive({
    departments: "",
    waterSources: "",
    locations: "",
    system1s: "",
    system2s: "",
    workstations: "",
    pondNames: ""
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
onMounted(() => {
    getData()
})
</script>

<style scoped lang="scss">
.block_outer {
    background: #F4F5F7;
    margin: 20px;
}

.reverse {
    display: flex;
    flex-direction: row-reverse;
}

.display_none {
    display: none;
}
</style>