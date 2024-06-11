<template>
  <div style="display: flex;flex-direction: column; justify-content: center; align-items: center;width: 100%;height: 100%;">
    <div class="header">
      <el-card>
        <el-statistic
          title="CPU名称"
          :value="cpuName"
        ></el-statistic>
      </el-card>
      <el-card>
        <template #header>
          总 CPU 使用率
        </template>
        <el-progress indeterminate type="circle" :percentage="cpu_percent" :color="cpuStatus(cpu_percent)"></el-progress>
      </el-card>
      <el-card>
        <template #header>
          用户态 CPU 使用率
        </template>
        <el-progress indeterminate type="circle" :percentage="usr_percent" :color="cpuStatus(usr_percent)"></el-progress>
      </el-card>
      <el-card>
        <template #header>
          系统态 CPU 使用率
        </template>
        <el-progress indeterminate type="circle" :percentage="system_percent" :color="cpuStatus(system_percent)"></el-progress>
      </el-card>
    </div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script setup>
import { ref , onMounted } from 'vue'
import * as echarts from 'echarts'

console.log(echarts)

const cpuName = ref('CPU')

const cpu_percent = ref(0)
const usr_percent = ref(0)
const system_percent = ref(0)
const cpuStatus = (usage) => {
  if (usage < 60) {
    return '#67C23A'  // 对应 Element UI 的 'success' 颜色
  } else if (usage < 80) {
    return '#E6A23C'  // 对应 Element UI 的 'warning' 颜色
  } else {
    return '#F56C6C'  // 对应 Element UI 的 'danger' 颜色
  }
}


const chart = ref()

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
    data: ['CPU 使用率']
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
      name: 'CPU 使用率',
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
    option.series[0].data.push(getRandom(20, 40))
  }
  cpu_percent.value = option.series[0].data[option.series[0].data.length - 1]
  const myChart = echarts.init(chart.value)
  myChart.setOption(option,true)
  myChart.resize()
  // 让图表重新渲染
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

const updateChart = () => {
  if(option.series[0].data.length > 10){
    option.series[0].data.shift()
    option.xAxis.data.shift()
  }
  option.series[0].data.push(getRandom(20, 40))
  cpu_percent.value = option.series[0].data[option.series[0].data.length - 1]
  option.xAxis.data.push(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds())
  usr_percent.value = getRandom(10, 30)
  system_percent.value = getRandom(10, 30)
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
.header{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.chart{
  width: 100%;
  height: 400px;
  margin-top: 50px;
}
</style>