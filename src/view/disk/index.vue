<template>
    <div class="disk">
        <Select-client></Select-client>
        <div class="header">
            <el-card>
                <el-statistic
                  title="总容量"
                  :value="store.clientsList[store.client_index]?.disk.total"
                  :suffix="store.clientsList[store.client_index]?.disk.total_suffix"
                ></el-statistic>
            </el-card>
            <el-card>
                <el-statistic
                  title="剩余容量"
                  :value="store.clientsList[store.client_index]?.disk.free"
                  :suffix="store.clientsList[store.client_index]?.disk.free_suffix"
                ></el-statistic>
            </el-card>
        </div>
        <div ref="active" class="active"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { useClientsStore } from '@/store';

const store = useClientsStore()

const active = ref()
const activeOption = {
    title: {
        text: '磁盘活动'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    // 图例
    legend: {
        orient:'vertical',
        left: 'center',
        data: [{name: '剩余空间'}]
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [] //获取时、分、秒
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        max: 100
    },
    series: [
        {
        name: '剩余空间',
        type: 'line',
        data: []
        }
    ],
}

const update = () => {
    const disk = store.clientsList[store.client_index]?.disk
    console.log(disk);
    if (disk) {
        activeOption.xAxis.data = disk.time_list
        activeOption.series[0].data = disk.list
    }
    // console.log(total.value);
    const activeChart = echarts.init(active.value)
    activeChart.setOption(activeOption)
    activeChart.resize()
}

onMounted(() => {
    setInterval(update, 500)
    update()
})

</script>

<style scoped>
.disk{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.active{
    width: 100%;
    height: 300px;
}
</style>