import { defineStore } from 'pinia' 
import { onUnmounted, ref } from 'vue'
import res from '@/proto/client'
import { watch } from 'vue'

export const useCPUStore = defineStore('cpu', () => {
    const CPUList = ref([])

    let id

    const updateList = () => {
        const newList = res.getCpuStatList()
        const time = new Date()
        if (CPUList.value.length === 0){
            newList.forEach(item => {
                const cpu = {
                    cpu_name: item.getCpuName(),
                    cpu_percent: item.getCpuPercent(),  
                    usr_percent: item.getUsrPercent(),
                    system_percent: item.getSystemPercent(),
                    cpu_list: [item.getCpuPercent()],
                    time_list: [time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()]
                }
                CPUList.value.push(cpu)
            });
        }
        else {
            CPUList.value.map((item, index) => {
                if (item.cpu_list.length >= 10){
                    item.cpu_list.shift()
                    item.time_list.shift()
                }
                item.cpu_list.push(newList[index].getCpuPercent())
                item.time_list.push(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds())

            })
        }
    }
    const startUpdating = () => {
        id = setInterval(updateList, 2000);
    }
    const stopUpdating = () => {
        clearInterval(id)
    }
    onUnmounted(() => {
        stopUpdating();
        window.removeEventListener('beforeunload', stopUpdating);
    });
    
    startUpdating()

    return {
        CPUList
    }
})