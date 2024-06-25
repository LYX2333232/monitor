<template>
  <div class="all">
    <el-table :data="store.clientsList" border>
      <el-table-column label="monitor名称" prop="name"></el-table-column>
      <el-table-column label="操作系统" prop="os_info"></el-table-column>
    </el-table>
    <div ref="memory" class="chart"></div>
    <div ref="disk" class="chart"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useClientsStore } from '@/store'
import * as echarts from 'echarts'

const store = useClientsStore()

const memory = ref()

const disk = ref()

const memoryOptions = {
  title: {
    text: '内存'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [], //获取时、分、秒
    boundaryGap: ['10%','10%']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} GB'
    },
  },
  series: [
    {
      name: '内存',
      type: 'bar',
      data: [],
      // 在顶部显示数值
      label: {
        show: true,
        formatter: '{c} GB',
        position: 'top'
      },
      barWidth: 50,
      barGap: '10%'
    }
  ]
}
const diskOptions = {
  title: {
    text: '磁盘'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [], //获取时、分、秒
    boundaryGap: ['10%', '10%']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} GB'
    },
  },
  series: [
    {
      name: '内存',
      type: 'bar',
      data: [],
      // 在顶部显示数值
      label: {
        show: true,
        formatter: '{c} GB',
        position: 'top'
      },
      barWidth: 50,
      barGap: '10%'
    }
  ]
}

const updateMemory = () => {
  memoryOptions.xAxis.data = store.clientsList.map(client => client.name)
  memoryOptions.series[0].data = store.clientsList.map(client => client.memory.total.toFixed(2))
  const myChart = echarts.init(memory.value);
  myChart.setOption(memoryOptions);
  myChart.resize();
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

const updateDisk = () => {
  diskOptions.xAxis.data = store.clientsList.map(client => client.name)
  diskOptions.series[0].data = store.clientsList.map(client => client.disk.total.toFixed(2))
  const myChart = echarts.init(disk.value);
  myChart.setOption(diskOptions);
  myChart.resize();
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

setInterval(updateMemory, 1000);
setInterval(updateDisk, 1000);
</script>

<style scoped>
.all{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.home{
  width: 100%;
  display: gird;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
}

.chart{
  width: 100%;
  height: 400px;
  margin-top: 50px;
}
</style>