<template>
  <div class="all">
    <Select-client></Select-client>
    <el-tabs @tab-change="onTabChange" type="border-card" style="width: 100%" v-model="activeKey">
      <el-tab-pane v-for="(item, index) in cpuList" :name="index" :label="item.cpu_name">
        <div
          style="display: flex;flex-direction: column; justify-content: center; align-items: center;width: 100%;height: 100%;">
          <div class="header">
            <el-card>
              <el-statistic title="CPU名称" :value="cpuName"></el-statistic>
            </el-card>
            <el-card>
              <template #header>
                总 CPU 使用率
              </template>
              <el-progress indeterminate type="circle" :percentage="cpu_percent" :format="formatPercent"
                :color="cpuStatus(cpu_percent)"></el-progress>
            </el-card>
            <el-card>
              <template #header>
                用户态 CPU 使用率
              </template>
              <el-progress indeterminate type="circle" :percentage="usr_percent" :format="formatPercent"
                :color="cpuStatus(usr_percent)"></el-progress>
            </el-card>
            <el-card>
              <template #header>
                系统态 CPU 使用率
              </template>
              <el-progress indeterminate type="circle" :percentage="system_percent" :format="formatPercent"
                :color="cpuStatus(system_percent)"></el-progress>
            </el-card>
          </div>
          <div :ref="el=>(charts[index]=el)" class="chart"></div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref , onMounted } from 'vue'
import * as echarts from 'echarts'
import { useClientsStore } from '@/store';

const store = useClientsStore()
// console.log(echarts)

const activeKey = ref(0)

const cpuList = ref([
  {
    cpu_name: 'CPU1',
    cpu_percent: 0,
    usr_percent: 0,
    system_percent: 0
  },
  {
    cpu_name: 'CPU2',
    cpu_percent: 0,
    usr_percent: 0,
    system_percent: 0
  }
])

const cpuName = ref('CPU')

const cpu_percent = ref(0)
const usr_percent = ref(0)
const system_percent = ref(0)
const formatPercent = (percent) => {
  return percent.toFixed(2) + '%'
}
const cpuStatus = (usage) => {
  if (usage < 60) {
    return '#67C23A'  // 对应 Element UI 的 'success' 颜色
  } else if (usage < 80) {
    return '#E6A23C'  // 对应 Element UI 的 'warning' 颜色
  } else {
    return '#F56C6C'  // 对应 Element UI 的 'danger' 颜色
  }
}

const charts = ref([null,null])

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
    },
    max: 100
  },
  series: [
    {
      name: 'CPU 使用率',
      type: 'line',
      data: []
    }
  ]
}

const onTabChange = (key) => {
  activeKey.value = key
  updateChart()
}

const updateChart = async () => {
  if(store.clientsList[store.client_index]?.CPUList.length > 0){
    option.series[0].data = store.clientsList[store.client_index].CPUList[activeKey.value]?.cpu_list
    cpu_percent.value = option.series[0].data[option.series[0].data.length - 1]
    option.xAxis.data = store.clientsList[store.client_index].CPUList[activeKey.value]?.time_list
    usr_percent.value = store.clientsList[store.client_index].CPUList[activeKey.value]?.usr_percent
    system_percent.value = store.clientsList[store.client_index].CPUList[activeKey.value]?.system_percent
  }
  charts.value.forEach(chart => {
    const myChart = echarts.init(chart);
    myChart.setOption(option, true);
    myChart.resize();
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  })
}

onMounted(async () => {
  setInterval(updateChart, 500);
  updateChart()
})

</script>

<style scoped>
.all{
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
  height: 400px;
  margin-top: 50px;
}
</style>