<template>
    <div class="wrap">
        <div class="header">
            設定摘要
        </div>
        <div class="content">
            <div class="row">
                <div class="empty" v-if="props.canal.canalName === ''">
                    <span class="text-danger">請設定查詢條件</span>
                </div>
                <div class="material" v-if="props.canal.canalName
                    != ''">

                    <div class="table_wrap">
                        <span class="title">埤圳別</span>
                        <table class="table table-bordered ">
                            <tbody>
                                <tr>

                                    <td class="item_name">管理處</td>
                                    <td>{{ props.canal.association || "-" }}</td>
                                </tr>
                                <tr>

                                    <td class="item_name">水源別</td>
                                    <td>{{ props.canal.systemName || "-" }}</td>
                                </tr>
                                <tr>

                                    <td class="item_name">分處</td>
                                    <td>{{ props.canal.branch || "-" }}</td>
                                </tr>
                                <tr>

                                    <td class="item_name">系統1</td>
                                    <td>{{ props.canal.subSystem1 || "-" }}</td>
                                </tr>
                                <tr>

                                    <td class="item_name">系統2</td>
                                    <td>{{ props.canal.subSystem2 || "-" }}</td>
                                </tr>
                                <tr>

                                    <td class="item_name">工作站</td>
                                    <td>{{ props.canal.workStation || "-" }}</td>
                                </tr>
                                <tr>

                                    <td class="item_name">埤圳別</td>
                                    <td>{{ props.canal.canalName || "-" }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="data_length">
                        <span class="title">資料長度</span>
                        <div class="box_wrap">
                            <div class="box">
                                <span class="year">
                                    109
                                </span>
                            </div>
                            <div class="box box_nodata">
                                <span class="year">
                                    110
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <span class="title">期作</span>
                        <span v-if="props.canal.period == '1'">一期作</span>
                        <span v-if="props.canal.period == '2'">二期作</span>
                        <span v-if="props.canal.period == '0'">合計</span>

                    </div>
                    <div class="col-12">
                        <span class="title">年度</span>
                        {{ props.canal.startYear }}~{{ props.canal.endYear }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const { resDataStore } = useCounterStore();
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
        default: () => ({
            rid: 0,
            association: "",//管理處
            systemName: null,//水源別
            branch: null,//分處
            subSystem1: null,//系統1
            subSystem2: null,//系統2
            workStation: "",//工作站
            canalName: "",//埤圳別
            period: '',//期別
            startYear: '',//起始年
            endYear: '',//結束年
        })
    }
})
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

.empty {
    text-align: center;
}

.item_name {
    width: 40%;
}

.material {
    .title {
        color: #5BA875;
        font-size: 16px;
        font-weight: 700;
        line-height: 130%;
    }

    .col-12 {
        display: flex;
        gap: 10px;
        align-items: center;
    }

}

.material>div {
    margin-bottom: 10px;
}

.box_wrap {
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #000;

    .box {
        background-color: #5BA875;
        display: inline-block;
        padding: 5px;
        color: #fff;
        border-left: 1px solid #000;
        border-right: 1px solid #000;

    }

    .box_nodata {
        background-color: #fff;
        color: #5BA875;
    }
}

.table_wrap {
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