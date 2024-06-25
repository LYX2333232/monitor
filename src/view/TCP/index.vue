<template>
  <div class="all">
    <Select-client></Select-client>
    <el-collapse style="width:100%" v-model="activeKey">
      <el-collapse-item v-for="item in store.clientsList[store.client_index]?.netList" :key="item.name" :name="item.name"
        :title="item.name">
        <div class="item">
          <el-card>
            <el-statistic title="发送速率" :value="item.send_rate" suffix="bytes/s"></el-statistic>
          </el-card>
          <el-card>
            <el-statistic title="接收速率" :value="item.rcv_rate" suffix="bytes/s"></el-statistic>
          </el-card>
          <el-card>
            <el-statistic title="发送包速率" :value="item.send_packets_rate" suffix="packets/s"></el-statistic>
          </el-card>
          <el-card>
            <el-statistic title="接收包速率" :value="item.rcv_packets_rate" suffix="packets/s"></el-statistic>
          </el-card>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue' 
import { useClientsStore } from '@/store';

const store = useClientsStore()

const activeKey = ref([])
</script>

<style scoped>
.all{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>