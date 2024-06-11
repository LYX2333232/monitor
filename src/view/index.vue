<template>
    <el-container style="width: 100%; height: 100%;">
        <el-aside width="300px">
            <el-menu router style="width: 300px;position: fixed;top: 0;left: 0;height: 100vh;" :default-active="current"
                mode="vertical" background-color="#304156" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="home">主机信息</el-menu-item>
                <el-sub-menu index="monitor">
                    <template #title>主机利用率</template>
                    <el-menu-item index="CPU">CPU使用率</el-menu-item>
                    <el-menu-item index="memory">内存使用率</el-menu-item>
                    <el-menu-item index="disk">磁盘使用情况</el-menu-item>
                    <el-menu-item index="network">网卡传输情况</el-menu-item>
                    <el-menu-item index="TCP">TCP连接信息</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-container>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
import client from '../proto/client'
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb.js';

const request = new google_protobuf_empty_pb.Empty()

let message
client.getMonitorInfo(request, {}, (err, response) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(response)
    // message = response.message
})
const current = ref('1')
</script>