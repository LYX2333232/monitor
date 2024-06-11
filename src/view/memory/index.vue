<template>
    <div class="memory">
        <div class="header">
            <el-card>
                <el-statistic title="内存总量" :precision="2" :value="total" suffix="GB"></el-statistic>
            </el-card>
            <el-card>
                <el-statistic title="内存使用量" :value="total * used_percent / 100" :precision="2" suffix="GB"></el-statistic>
            </el-card>
            <el-card>
                <el-statistic title="内存使用率" :value="used_percent" :precision="2" suffix="%"></el-statistic>
            </el-card>
            <el-card>
                <el-statistic title="内存剩余量" :value="total * (100 - used_percent) / 100" :precision="2" suffix="GB"></el-statistic>
            </el-card>
        </div>
        <div ref="chart" class="chart"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chart = ref()

const total = ref(8)
const used_percent = ref(0)

const getRandom = (min, max) => {
    // 保留两位小数
    return (Math.random() * (max - min) + min).toFixed(2)
}

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
        }
    },
    series: [
        {
            name: '内存使用率',
            type: 'line',
            data: []
        }
    ]
}

const chartInit = () => {
    const date = new Date()
    for (let i = 10; i >= 0; i--) {
        const temp = new Date()
        temp.setSeconds(date.getSeconds() - 2 * i)
        option.xAxis.data.push(temp.getHours() + ':' + temp.getMinutes() + ':' + temp.getSeconds())
        option.series[0].data.push(getRandom(60, 70))
    }
    used_percent.value = option.series[0].data[option.series[0].data.length - 1]
    const myChart = echarts.init(chart.value)
    myChart.setOption(option, true)
    myChart.resize()
    // 让图表重新渲染
    window.addEventListener('resize', () => {
        myChart.resize()
    })
}

const updateChart = () => {
    console.log(option.series[0].data.length)
    if (option.series[0].data.length > 10) {
        option.series[0].data.shift()
        option.xAxis.data.shift()
    }
    option.series[0].data.push(getRandom(60, 70))
    used_percent.value = option.series[0].data[option.series[0].data.length - 1] * total.value / 100
    option.xAxis.data.push(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds())
    const myChart = echarts.init(chart.value)
    myChart.setOption(option, true)
    myChart.resize()
    // 让图表重新渲染
    window.addEventListener('resize', () => {
        myChart.resize()
    })
}

onMounted(async () => {
    setInterval(updateChart, 2000);
    chartInit()
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