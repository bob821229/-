<template>
    <div class="wrap">
        <div class="header">
            設定摘要
        </div>
        <div class="content">
            <div class="empty" v-if="resDataStore.pondName ===''">
                <span class="text-danger">請設定查詢條件</span>
            </div>
            <div class="material" v-if="resDataStore.pondName !=''">
                <div class="table_wrap">
                    <span class="table_title">埤圳別</span>
                    <table class="table table-bordered ">
                        <tbody>
                            <tr>

                                <td class="item_name">管理處</td>
                                <td>{{ resDataStore.department || "-" }}</td>
                            </tr>
                            <tr>

                                <td class="item_name">水源別</td>
                                <td>{{ resDataStore.waterSource || "-" }}</td>
                            </tr>
                            <tr>

                                <td class="item_name">分處</td>
                                <td>{{ resDataStore.location || "-" }}</td>
                            </tr>
                            <tr>

                                <td class="item_name">系統1</td>
                                <td>{{ resDataStore.system1 || "-" }}</td>
                            </tr>
                            <tr>

                                <td class="item_name">系統2</td>
                                <td>{{ resDataStore.system2 || "-" }}</td>
                            </tr>
                            <tr>

                                <td class="item_name">工作站</td>
                                <td>{{ resDataStore.workstation || "-" }}</td>
                            </tr>
                            <tr>

                                <td class="item_name">埤圳別</td>
                                <td>{{ resDataStore.pondName || "-" }}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const { resDataStore } = useCounterStore();
</script>

<style scoped lang="scss">
@import '/node_modules/bootstrap/scss/bootstrap.scss';

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
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}
.empty{
    text-align: center;
}

.item_name {
    width: 40%;
}

.table_title {
    color: #5BA875;
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;
}
.table_wrap{
    width: 100%;
}
.table {
    margin-top: 5px;
    border-collapse: collapse;
}


.table td {
    font-size: 16px;
    font-weight: 600;
}
</style>