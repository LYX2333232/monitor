<template>
  <el-collapse style="width:100%" v-model="activeKey">
    <el-collapse-item v-for="(collapse,index) in collapseList" :key="'collapse'+index" :name="'collapse' + index"
      :title="collapse.title">
      <div class="items">
        <el-card v-for="(item,index) in collapse.data" :key="'item'+index">
          <el-statistic
            :title="item.name"
            :value="item.value"
            :precision="item.precision"
            :suffix="item.suffix"
          ></el-statistic>
        </el-card>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeKey = ref([])

const collapseList = ref([])

const getRandom = (min, max) => {
  return Math.random() * (max - min + 1) + min
}

onMounted(()=>{
  collapseList.value = [
    {
      title: 'process',
      data: [
        {
          name: '最近CPU使用率',
          value: getRandom(0, 30),
          precision: 5,
          suffix: '%'
        }
      ]
    },
    {
      title: '任务度量',
      data: [
        {
          name: '执行次数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: '总执行时间',
          value: getRandom(0, 100),
          precision: 0,
          suffix: 'ms'
        },
        {
          name: '最长执行时间',
          value: getRandom(0, 1000),
          precision: 0,
          suffix:'ms'
        },
        {
          name: '活动任务数量',
          value: getRandom(0, 40),
          precision: 0,
          suffix: ''
        },
        {
          name: '持续时间',
          value: getRandom(0, 10000),
          precision: 0,
          suffix:'ms'
        }
      ]
    },
    {
      title: '执行器',
      data: [
        {
          name: '已完成执行的任务',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: '可以接受的额外元素数量',
          value: getRandom(0, 30),
          precision: 0,
          suffix: ''
        },
        {
          name: '最大线程数',
          value: getRandom(0, 500),
          precision: 0,
          suffix: ''
        },
        {
          name: '等待执行的任务数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: '正在活动执行任务数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: '线程池中的线程数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        }
      ]
    },
    {
      title: 'HTTP',
      data: [
        {
          name: '请求数量',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: '总请求时间',
          value: getRandom(0, 1000),
          precision: 0,
          suffix: 'ms'
        },
        {
          name: '最大请求时间',
          value: getRandom(0, 1000),
          precision: 0,
          suffix: 'ms'
        }
      ]
    },
    {
      title: 'JVM',
      data: [
        {
          name: 'gc',
          value: getRandom(0, 100),
          precision: 0,
          suffix: '%'
        },
        {
          name: '最高活动线程计数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: '当前的活动线程数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: 'GC 活动所用时间的近似百分比',
          value: getRandom(0, 100),
          precision: 0,
          suffix: '%'
        },
        {
          name: ' JVM 中启动的应用程序线程的总数',
          value: getRandom(0, 2000),
          precision: 0,
          suffix: ''
        },
        {
          name: '已使用的内存量',
          value: getRandom(0, 1000),
          precision: 3,
          suffix: 'Bytes'
        },
        {
          name: '当前活动的守护线程数量',
          value: getRandom(0, 500),
          precision: 0,
          suffix: ''
        }
      ]
    },
    {
      title: 'Tomcat',
      data: [
        {
          name: '已过期的会话总数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: '由于达到最大会话数而被拒绝创建的新会话总数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: '创建的会话总数',
          value: getRandom(0, 300),
          precision: 0,
          suffix: ''
        },
        {
          name: '当前活动的会话数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        },
        {
          name: '同时活动的最大会话数',
          value: getRandom(0, 100),
          precision: 0,
          suffix: ''
        }
      ]
    }
  ]
})
</script>

<style scoped>
.items{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>