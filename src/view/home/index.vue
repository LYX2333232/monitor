<template>
  <div class="home">
    <el-card body-style="display: flex;justify-content: space-between;align-items: center;">
      <el-statistic :value="port.join('.')" value-style="font-size: 20px;text-align: center;">
        <template #title>
          <div style="font-size: 25px;font-weight: bold;">主机端口</div>
        </template>
      </el-statistic>
      <el-button type="primary" @click="visible = true">修改端口</el-button>
    </el-card>
    <el-card>
      <el-statistic :value="name" value-style="font-size: 20px;margin: 0 auto;">
        <template #title>
          <div style="font-size: 25px;font-weight: bold;">主机用户</div>
        </template>
      </el-statistic>
    </el-card>
    <el-card>
      <el-statistic :value="memory" value-style="font-size: 20px;margin: 0 auto;">
        <template #title>
          <div style="font-size: 25px;font-weight: bold;">主机内存</div>
        </template>
      </el-statistic>
    </el-card>
    <el-card>
      <el-statistic :value="network" value-style="font-size: 20px;margin: 0 auto;">
        <template #title>
          <div style="font-size: 25px;font-weight: bold;">网卡</div>
        </template>
      </el-statistic>
    </el-card>
    <el-card>
      <el-statistic :value="os" value-style="font-size: 20px;margin: 0 auto;">
        <template #title>
          <div style="font-size: 25px;font-weight: bold;">操作系统</div>
        </template>
      </el-statistic>
    </el-card>
  </div>
  <el-dialog title="修改端口" width="600px" v-model="visible" @close="handleCancel">
    <div style="display: flex;align-items: center;justify-content: center;">
      <el-input-number :controls="false" step-strictly :min="0" :max="255" v-model="form[0]"
        :step="1"></el-input-number>
      <span style="margin: 0 10px;">.</span>
      <el-input-number :controls="false" step-strictly :min="0" :max="255" v-model="form[1]"
        :step="1"></el-input-number>
      <span style="margin: 0 10px;">.</span>
      <el-input-number :controls="false" step-strictly :min="0" :max="255" v-model="form[2]"
        :step="1"></el-input-number>
      <span style="margin: 0 10px;">.</span>
      <el-input-number :controls="false" step-strictly :min="0" :max="255" v-model="form[3]"
        :step="1"></el-input-number>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button size="small" @click="handleCancel">取 消</el-button>
        <el-button size="small" type="primary" @click="handleOk" :loading="confirmLoading">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import res from '@/proto/client'

const port = ref([])
const form = ref([0, 0, 0, 0])
const name = ref('')
const memory = ref('8G')
const network = ref('100M')
const os = ref('Windows 10')

const visible = ref(false)
const confirmLoading = ref(false)

const handleOk = () => {
  confirmLoading.value = true
  port.value = form.value
  localStorage.setItem('port',form.value.join('.'))
  visible.value = false
  confirmLoading.value = false
}


const handleCancel = () => {
  visible.value = false
}

onMounted(()=>{
  if(localStorage.getItem('port')){
    port.value = localStorage.getItem('port').split('.')
  }
  else {
    visible.value = true
  }
  name.value = res.getName()
  console.log('os',res.getOsInfo());
})
</script>

<style scoped>
.home{
  width: 100%;
  display: gird;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
}
</style>