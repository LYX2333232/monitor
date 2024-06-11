<template>
    <el-collapse style="width:100%" v-model="activeKey">
      <el-collapse-item v-for="item in netInfoList" :key="item.name" :name="item.name" :title="item.name">
        <div class="item">
            <el-card>
                <el-statistic
                  title="发送速率"
                  :value="item.send_rate"
                  suffix="bytes/s"
                ></el-statistic>
            </el-card>
            <el-card>
                <el-statistic
                  title="接收速率"
                  :value="item.rcv_rate"
                  suffix="bytes/s"
                ></el-statistic>
            </el-card>
            <el-card>
                <el-statistic
                  title="发送包速率"
                  :value="item.send_packets_rate"
                  suffix="packets/s"
                ></el-statistic>
            </el-card>
            <el-card>
                <el-statistic
                  title="接收包速率"
                  :value="item.rcv_packets_rate"
                  suffix="packets/s"
                ></el-statistic>
            </el-card>
        </div>
      </el-collapse-item>
    </el-collapse>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeKey = ref([])

const netInfoList = ref([])

const init = () => {
    netInfoList.value = []
    for (let i = 0; i < 10; i++) {
        const info = {
            name: `eth${i}`,
            send_rate: Math.floor(Math.random() * 10000000) / 100,
            rcv_rate: Math.floor(Math.random() * 10000000) / 100,
            send_packets_rate: Math.floor(Math.random() * 10000000) / 100,
            rcv_packets_rate: Math.floor(Math.random() * 10000000) / 100,
        }
        netInfoList.value.push(info)
    }
}
onMounted(() => {
    init()
})
</script>

<style scoped>
.item{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>