<template>
    <div class="network">
        <Select-client></Select-client>
        <el-collapse style="width:100%" v-model="activeKey">
            <el-collapse-item v-for="(item, index) in store.clientsList[store.client_index]?.netcardList" :name="index"
                :title="item.name">
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
// import res from '@/proto/client'
import { useClientsStore } from '@/store';

const store = useClientsStore()

const activeKey = ref([])
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