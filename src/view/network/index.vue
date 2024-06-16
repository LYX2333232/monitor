<template>
    <div class="network">
        <el-collapse v-model="activeKey">
          <el-collapse-item v-for="(item,index) in list" :name="index" :title="item.name">
            <div class="network-item">
                <el-card>
                    <template #header>
                      mac地址
                    </template>
                    {{ item.mac_address }}
                </el-card>
                <el-card>
                    <template #header>
                        mtu
                    </template>
                    {{ item.mtu }}
                </el-card>
            </div>
          </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import res from '@/proto/client'

const networkList = res.getNetcardInfoList()

console.log('networkList',networkList)

const activeKey = ref([])

const list = ref([])


networkList.forEach(item => {
    list.value.push({
        name: item.name,
        mac_address: item.mac_address,
        mtu: item.mtu
    })
})
console.log('list',list.value)

</script>

<style scoped>
.network{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.network-item{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}
</style>