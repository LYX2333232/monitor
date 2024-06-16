import { defineStore } from 'pinia'
import { onUnmounted, ref } from 'vue'
import res from '@/proto/client'

export const useMemoryStore = defineStore('memory', () => {
    const memory = ref(undefined)
    let id = undefined

    const updateMemory = () => {
        const newInfo = res.getMemInfo()
        const time = new Date()
        if (!memory.value)
            memory.value = {
                total: newInfo.getTotal(),
                free: newInfo.getFree(),
                avail: newInfo.getAvail(),
                used_percent: newInfo.getUsedPercent(),
                list: [newInfo.getUsedPercent()],
                time_list: [time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()]
            }
        else {
            if(memory.value.list.length >= 20){
                memory.value.list.shift()
                memory.value.time_list.shift()
            }
            memory.value.total = newInfo.getTotal()
            memory.value.free = newInfo.getFree()
            memory.value.avail = newInfo.getAvail()
            memory.value.used_percent = newInfo.getUsedPercent()
            memory.value.list.push(newInfo.getUsedPercent())
            memory.value.time_list.push(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds())
        }
    }

    const startUpdating = () => {
        id = setInterval(updateMemory, 2000)
    }
    startUpdating()

    const stopUpdating = () => {
        clearInterval(id)
    }

    onUnmounted(() => {
        stopUpdating();
        window.removeEventListener('beforeunload', stopUpdating);
    });
    return {
        memory
    }
})