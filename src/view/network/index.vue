<template>
    <div class="network">
        <div class="header">
            <el-card>
                <template #header>
                  <h3>网络连接</h3>
                </template>
                <h4>{{ connection }}</h4>
            </el-card>
            <el-card>
                <el-statistic
                  title="发送"
                  :value="send"
                  suffix="Kbps"
                  :precision="2"
                ></el-statistic>
            </el-card>
            <el-card>
                <el-statistic
                  title="接收"
                  :value="receive"
                  suffix="Kbps"
                  :precision="2"
                ></el-statistic>
            </el-card>
        </div>
        <div ref="chart" class="chart"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const connection = ref('SCUT')
const send = ref(0)
const receive = ref(0)

const chart = ref()
const option = {
    title: {
        text: '历史记录'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['接收速率', '发送速率']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} Kbps'
        }
    },
    series: [
        {
            name: '接收速率',
            type: 'line',
            data: []
        },
        {
            name: '发送速率',
            type: 'line',
            data: []   
        }
    ]
}
const getRandom = (min, max) => {
    return Math.random() * (max - min + 1) + min
}
const initChart = () => {
    const date = new Date()
    for (let i = 10; i >= 0; i--) {
        const temp = new Date()
        temp.setSeconds(date.getSeconds() - 2 * i)
        option.xAxis.data.push(temp.getHours() + ':' + temp.getMinutes() + ':' + temp.getSeconds())
        option.series[0].data.push(getRandom(0, 300))
        option.series[1].data.push(getRandom(0, 300))
    }
    receive.value = option.series[0].data[0]
    send.value = option.series[1].data[0]
    const myChart = echarts.init(chart.value)
    myChart.setOption(option)
    myChart.resize()
    // 让图表重新渲染
    window.addEventListener('resize', () => {
        myChart.resize()
    })
}
const updateChart = () => {
    option.series[0].data.shift()
    option.series[0].data.push(getRandom(0, 300))
    option.series[1].data.shift()
    option.series[1].data.push(getRandom(0, 300))
    option.xAxis.data.shift()
    const date = new Date()
    option.xAxis.data.push(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
    receive.value = option.series[0].data[0]
    send.value = option.series[1].data[0]
    const myChart = echarts.init(chart.value)
    myChart.setOption(option)
    myChart.resize()
    // 让图表重新渲染
    window.addEventListener('resize', () => {
        myChart.resize()
    })
}
onMounted(() => {
    initChart()
    setInterval(updateChart, 2000)
 })
</script>

<style scoped>
.network{
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

.chart{
    width: 100%;
    height: 300px;
}
</style>