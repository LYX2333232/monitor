<template>
  <div class="all">
    <Select-client></Select-client>
    <el-collapse style="width:100%" v-model="activeKey">
      <el-collapse-item v-for="(collapse,index) in store.clientsList[store.client_index]?.metric"
        :key="'collapse' + index" :name="'collapse' + index" :title="collapse.title">
        <div class="items">
          <el-card v-for="(item,index) in collapse.data" :key="'item'+index">
            <el-statistic :title="item[0]" :value="item[1]" :precision="item[2]" :suffix="item[3]"></el-statistic>
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
.items{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>