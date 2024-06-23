<template>
  <el-table :data="store.clientsList" border>
    <el-table-column label="monitor名称" prop="name"></el-table-column>
    <el-table-column label="操作系统" prop="os_info"></el-table-column>
  </el-table>
  <div ref="memory" class="memory"></div>
</template>

<script setup>
import { ref } from 'vue'
import { useClientsStore } from '@/store'
import * as echarts from 'echarts'

const store = useClientsStore()

const memory = ref()

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
      name: '内存',
      type: 'bar',
      data: []
    }
  ]
}

const updateMemory = () => {
  memoryOptions.xAxis.data = store.clientsList.map(client => client.name)
  memoryOptions.series[0].data = store.clientsList.map(client => client.memory.total)
  const myChart = echarts.init(memory.value);
  myChart.setOption(memoryOptions);
  myChart.resize();
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

setInterval(updateMemory, 1000);
</script>

<style scoped>
.home{
  width: 100%;
  display: gird;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
}

.memory{
  width: 100%;
  height: 400px;
}
</style>