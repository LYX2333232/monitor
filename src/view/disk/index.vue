<template>
    <div class="disk">
        <div class="header">
            <el-card>
                <el-statistic
                  title="总容量"
                  :value="total"
                  suffix="GB"
                ></el-statistic>
            </el-card>
            <el-card>
                <el-statistic
                  title="读取速度"
                  :value="read"
                  suffix="KB/s"
                    :precision="2"
                ></el-statistic>
            </el-card>
            <el-card>
                <el-statistic
                  title="写入速度"
                  :value="write"
                  suffix="KB/s"
                  :precision="2"
                ></el-statistic>
            </el-card>
        </div>
        <div ref="active" class="active"></div>
        <div ref="speed" class="speed"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const total = ref(234)
const read = ref(0)
const write = ref(0)
const getRandom = (min, max) => {
    return Math.random() * (max - min + 1) + min
}
const active = ref()
const activeOption = {
    title: {
        text: '磁盘活动'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
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
        name: '磁盘活动',
        type: 'line',
        data: []
        }
    ],
}

const speed = ref()
const speedOption = {
    title: {
        text: '磁盘速度'
    },
    // 图例
    legend: {
        data: ['读取速度', '写入速度']
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [] //获取时、分、秒
    },
    yAxis: {
        type: 'value',
        axisLabel: {
        formatter: '{value} KB/s'
        }
    },
    series: [
        {
        name: '读取速度',
        type: 'line',
        data: []
        },
        {
        name: '写入速度',
        type: 'line',
        data: []
        }
    ],
}


const initActive = () => {
    const date = new Date()
    for (let i = 10; i >= 0; i--){
        const temp = new Date()
        temp.setSeconds(date.getSeconds() - 2 * i)
        activeOption.xAxis.data.push(temp.getHours() + ':' + temp.getMinutes() + ':' + temp.getSeconds())
        activeOption.series[0].data.push(getRandom(0, 40))
    }
    const activeChart = echarts.init(active.value)
    activeChart.setOption(activeOption)
    activeChart.resize()
    window.addEventListener('resize', () => {
        activeChart.resize()
    })
}
const updateActive = () => {
    if(activeOption.series[0].data.length > 10){
        activeOption.series[0].data.shift()
        activeOption.xAxis.data.shift()
    }
    activeOption.series[0].data.push(getRandom(20, 40))
    activeOption.xAxis.data.push(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds())
    const activeChart = echarts.init(active.value)
    activeChart.setOption(activeOption)
    activeChart.resize()
}

const initSpeed = () => {
    const date = new Date()
    for (let i = 10; i >= 0; i--){
        const temp = new Date()
        temp.setSeconds(date.getSeconds() - 2 * i)
        speedOption.xAxis.data.push(temp.getHours() + ':' + temp.getMinutes() + ':' + temp.getSeconds())
        speedOption.series[0].data.push(getRandom(0, 500))
        speedOption.series[1].data.push(getRandom(0, 500))
    }
    read.value = speedOption.series[0].data[speedOption.series[0].data.length - 1]
    write.value = speedOption.series[1].data[speedOption.series[1].data.length - 1]
    const speedChart = echarts.init(speed.value)
    speedChart.setOption(speedOption)
    speedChart.resize()
    window.addEventListener('resize', () => {
        speedChart.resize()
    })
}
const updateSpeed = () => {
    if(speedOption.series[0].data.length > 10){
        speedOption.series[0].data.shift()
        speedOption.series[1].data.shift()
        speedOption.xAxis.data.shift()
    }
    read.value = getRandom(0, 500)
    write.value = getRandom(0, 500)
    speedOption.series[0].data.push(read.value)
    speedOption.series[1].data.push(write.value)
    speedOption.xAxis.data.push(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds())
    const speedChart = echarts.init(speed.value)
    speedChart.setOption(speedOption)
    speedChart.resize()
}

onMounted(() => {
    setInterval(updateActive, 2000)
    initActive()
    setInterval(updateSpeed, 2000)
    initSpeed()
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

.speed{
    width: 100%;
    height: 200px;
}
</style>