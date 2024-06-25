<template>
    <div style="display: flex;width:40%;align-items: center;justify-content: space-between;">
        <h3 style="width:200px">选择客户端</h3>
        <el-select @change="handleSelect" v-model="store.client_index" placeholder="">
            <el-option v-for="(client, index) in store.clientsList" :key="client.name" :label="client.name"
                :value="index"></el-option>
        </el-select>
    </div>
</template>
<script setup>
import { useClientsStore } from '@/store'

const store = useClientsStore()

const handleSelect = (val) => {
    store.changeIndex(val)
}
</script>