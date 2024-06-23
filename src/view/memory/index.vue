<template>
    <div class="memory">
        <div class="header">
            <el-card>
                <el-statistic title="内存总量" :precision="2" :value="total" suffix="GB"></el-statistic>
            </el-card>
            <el-card>
                <el-statistic title="空闲内存量" :value="free" :precision="2" suffix="GB"></el-statistic>
            </el-card>
            <el-card>
                <el-statistic title="内存使用率" :value="used_percent" :precision="2" suffix="%"></el-statistic>
            </el-card>
            <el-card>
                <el-statistic title="可用内存量" :value="avail" :precision="2" suffix="GB"></el-statistic>
            </el-card>
        </div>
        <div ref="chart" class="chart"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { useClientsStore } from '@/store'

const store = useClientsStore()

const chart = ref()

const total = ref(8)
const free = ref(0)
const avail = ref(0)
const used_percent = ref(0)


const option = {
    title: {
        text: '历史记录'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['内存使用率']
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
            name: '内存使用率',
            type: 'line',
            data: []
        }
    ]
}

const updateChart = () => {
    if(store.clientsList[store.client_index]?.memory){
        option.series[0].data = store.clientsList[store.client_index].memory.list
        used_percent.value = store.clientsList[store.client_index].memory.used_percent
        total.value = store.clientsList[store.client_index].memory.total
        free.value = store.clientsList[store.client_index].memory.free
        avail.value = store.clientsList[store.client_index].memory.avail
        option.xAxis.data = store.clientsList[store.client_index].memory.time_list
    }
    const myChart = echarts.init(chart.value)
    myChart.setOption(option, true)
    myChart.resize()
    // 让图表重新渲染
    window.addEventListener('resize', () => {
        myChart.resize()
    })
}

onMounted(async () => {
    setInterval(updateChart, 500);
    updateChart()
})
</script>


<style scoped>
.memory{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

.chart{
    width: 100%;
    height: 300px;
}
</style>