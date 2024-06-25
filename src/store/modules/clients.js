import { defineStore } from 'pinia'
import { onUnmounted, ref } from 'vue'
import getMonitorInfo from '@/proto/client'

export const useClientsStore = defineStore('clients', () => {
    const clientsList = ref([])
    const client_index = ref(0)
    let id

    const changeIndex = (index) => {
        client_index.value = index
    }

    const update = async() => {
        const res = await getMonitorInfo()
        let has = false
        const time = new Date()
        const time_str = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
        const cpu_info_list = res.getCpuStatList()
        const mem_info = res.getMemInfo()
        const metric_info = res.getMetricInfo()
        const disk = {
            total: metric_info.getDiskTotal(),
            total_suffix: 'B',
            free: metric_info.getDiskFree(),
            free_suffix: 'B'
        }
        const unit = ['B', 'KB', 'MB', 'GB', 'TB']
        let i = 0
        while (disk.total >= 1024 && i < unit.length - 1) {
            disk.total /= 1024
            disk.total_suffix = unit[++i]
        }
        i = 0
        while (disk.free >= 1024 && i < unit.length - 1) {
            disk.free /= 1024
            disk.free_suffix = unit[++i]
        }
        console.log(disk)
        const netcard_info_list = res.getNetcardInfoList()
        const net_info_list = res.getNetInfoList()

        for (let index = 0; index < clientsList.value.length; index++)
            if (clientsList.value[index].name === res.getName()) {
                has = true

                // 更新osinfo
                clientsList.value[index].os_info = res.getOsInfo().getName()

                // 更新cpuInfo
                clientsList.value[index].CPUList.map((cpu, index) => {
                    const time_list = cpu.time_list
                    const cpu_list = cpu.cpu_list
                    cpu = {
                        cpu_name: cpu_info_list[index].getCpuName(),
                        cpu_percent: cpu_info_list[index].getCpuPercent(),
                        usr_percent: cpu_info_list[index].getUsrPercent(),
                        system_percent: cpu_info_list[index].getSystemPercent()
                    }
                    if (time_list.length >= 20) {
                        time_list.shift()
                        cpu_list.shift()
                    }
                    cpu_list.push(cpu_info_list[index].getCpuPercent())
                    time_list.push(time_str)
                    cpu.cpu_list = cpu_list
                    cpu.time_list = time_list
                })

                // 更新memory
                clientsList.value[index].memory.total = mem_info.getTotal()
                clientsList.value[index].memory.free = mem_info.getFree()
                clientsList.value[index].memory.avail = mem_info.getAvail()
                clientsList.value[index].memory.used_percent = mem_info.getUsedPercent()
                if (clientsList.value[index].memory.list.length >= 20) {
                    clientsList.value[index].memory.list.shift()
                    clientsList.value[index].memory.time_list.shift()
                }
                clientsList.value[index].memory.list.push(mem_info.getUsedPercent())
                clientsList.value[index].memory.time_list.push(time_str)

                // 更新disk
                clientsList.value[index].disk.total = disk.total
                clientsList.value[index].disk.free = disk.free
                if (clientsList.value[index].disk.list.length >= 20) {
                    clientsList.value[index].disk.list.shift()
                    clientsList.value[index].disk.time_list.shift()
                }
                clientsList.value[index].disk.list.push((disk.total - disk.free) / disk.total * 100)
                clientsList.value[index].disk.time_list.push(time_str)

                // 更新netcard
                clientsList.value[index].netcardList.map((card, index) => {
                    const netcard_info = netcard_info_list[index]
                    card.name = netcard_info.getName()
                    card.mac_address = netcard_info.getMacAddress()
                    card.mtu = netcard_info.getMtu()
                })

                // 更新net
                clientsList.value[index].netList.map((net, index) => {
                    const net_info = net_info_list[index]
                    net.name = net_info.getName()
                    net.send_rate = net_info.getSendRate()
                    net.rcv_rate = net_info.getRcvRate()
                    net.send_packets_rate = net_info.getSendPacketsRate()
                    net.rcv_packets_rate = net_info.getRcvPacketsRate()
                })

                // 更新metric
                clientsList.value[index].metric = [
                    {
                        title: 'process',
                        data: [
                            ['最近CPU使用率', metric_info.getProcessCpuUsage(), 5, '%']
                        ]
                    },
                    {
                        title: '任务度量',
                        data: [
                            ['执行次数', metric_info.getTasksScheduledExecution(), 0, ''],
                            ['活动任务数量', metric_info.getTasksScheduledExecutionActive(), 0, '']
                        ]
                    },
                    {
                        title: '执行器',
                        data: [
                            ['已完成执行的任务', metric_info.getExecutorCompleted(), 0, ''],
                            ['可以接受的额外元素数量', metric_info.getExecutorQueueRemaining(), 0, ''],
                            ['最大线程数', metric_info.getExecutorPoolMax(), 0, ''],
                            ['等待执行的任务数', metric_info.getExecutorQueued(), 0, ''],
                            ['正在活动执行任务数', metric_info.getExecutorActive(), 0, ''],
                            ['线程池中的线程数', metric_info.getExecutorPoolSize(), 0, '']
                        ]
                    },
                    {
                        title: 'HTTP',
                        data: [
                            ['请求数量', metric_info.getHttpServerRequests(), 0, ''],
                            ['活动任务数量', metric_info.getHttpServerRequestsActive(), 0, '']
                        ]
                    },
                    {
                        title: 'JVM',
                        data: [
                            ['gc', metric_info.getJvmMemoryUsageAfterGc(), 3, '%'],
                            ['最高活动线程计数', metric_info.getJvmThreadsPeak(), 0, ''],
                            ['当前的活动线程数', metric_info.getJvmThreadsLive(), 0, ''],
                            ['GC 活动所用时间的近似百分比', metric_info.getJvmGcOverhead(), 3, '%'],
                            ['JVM 中启动的应用程序线程的总数', metric_info.getJvmThreadsStarted(), 0, ''],
                            ['已使用的内存量', metric_info.getJvmMemoryUsed() / 1024 / 1024, 3, 'MB'],
                            ['当前活动的守护线程数量', metric_info.getJvmThreadsDaemon(), 0, '']
                        ]
                    },
                    {
                        title: 'Tomcat',
                        data: [
                            ['已过期的会话总数', metric_info.getTomcatSessionsExpired(), 0, ''],
                            ['由于达到最大会话数而被拒绝创建的新会话总数', metric_info.getTomcatSessionsCreated(), 0, ''],
                            ['当前活动的会话数', metric_info.getTomcatSessionsActiveCurrent(), 0, ''],
                            ['同时活动的最大会话数', metric_info.getTomcatSessionsActiveMax(), 0, '']
                        ]
                    }
                ]

                break
            }
        
        if (!has) {
            const client = {}
            client.name = res.getName()

            // 新增osinfo
            client.os_info = res.getOsInfo().getName()

            // 新增cpuInfo
            client.CPUList = cpu_info_list.map(cpu => {
                return {
                    cpu_name: cpu.getCpuName(),
                    cpu_percent: cpu.getCpuPercent(),
                    usr_percent: cpu.getUsrPercent(),
                    system_percent: cpu.getSystemPercent(),
                    cpu_list: [cpu.getCpuPercent()],
                    time_list: [time_str]
                }
            })
            // 新增memInfo
            client.memory = {
                total: mem_info.getTotal(),
                free: mem_info.getFree(),
                avail: mem_info.getAvail(),
                used_percent: mem_info.getUsedPercent(),
                list: [mem_info.getUsedPercent()],
                time_list: [time_str]
            }
            // 新增disk
            client.disk = {
                ...disk,
                list: [(disk.total - disk.free) / disk.total * 100],
                time_list: [time_str]
            }

            // 新增netcard
            client.netcardList = netcard_info_list.map(card => {
                return {
                    name: card.getName(),
                    mac_address: card.getMacAddress(),
                    mtu: card.getMtu(),
                }
            })

            // 新增net
            client.netList = net_info_list.map(net => {
                return {
                    name: net.getName(),
                    send_rate: net.getSendRate(),
                    rcv_rate: net.getRcvRate(),
                    send_packets_rate: net.getSendPacketsRate(),
                    rcv_packets_rate: net.getRcvPacketsRate()
                }
            })

            // 新增metric
            client.metric = [
                {
                    title: 'process',
                    data: [
                        ['最近CPU使用率', metric_info.getProcessCpuUsage(), 5, '%']
                    ]
                },
                {
                    title: '任务度量',
                    data: [
                        ['执行次数', metric_info.getTasksScheduledExecution(), 0, ''],
                        ['活动任务数量', metric_info.getTasksScheduledExecutionActive(), 0, '']
                    ]
                },
                {
                    title: '执行器',
                    data: [
                        ['已完成执行的任务', metric_info.getExecutorCompleted(), 0, ''],
                        ['可以接受的额外元素数量', metric_info.getExecutorQueueRemaining(), 0, ''],
                        ['最大线程数', metric_info.getExecutorPoolMax(), 0, ''],
                        ['等待执行的任务数', metric_info.getExecutorQueued(), 0, ''],
                        ['正在活动执行任务数', metric_info.getExecutorActive(), 0, ''],
                        ['线程池中的线程数', metric_info.getExecutorPoolSize(), 0, '']
                    ]
                },
                {
                    title: 'HTTP',
                    data: [
                        ['请求数量', metric_info.getHttpServerRequests(), 0, ''],
                        ['活动任务数量', metric_info.getHttpServerRequestsActive(), 0, '']
                    ]
                },
                {
                    title: 'JVM',
                    data: [
                        ['gc', metric_info.getJvmMemoryUsageAfterGc(), 3, '%'],
                        ['最高活动线程计数', metric_info.getJvmThreadsPeak(), 0, ''],
                        ['当前的活动线程数', metric_info.getJvmThreadsLive(), 0, ''],
                        ['GC 活动所用时间的近似百分比', metric_info.getJvmGcOverhead(), 3, '%'],
                        ['JVM 中启动的应用程序线程的总数', metric_info.getJvmThreadsStarted(), 0, ''],
                        ['已使用的内存量', metric_info.getJvmMemoryUsed() / 1024 / 1024, 3, 'MB'],
                        ['当前活动的守护线程数量', metric_info.getJvmThreadsDaemon(), 0, '']
                    ]
                },
                {
                    title: 'Tomcat',
                    data: [
                        ['已过期的会话总数', metric_info.getTomcatSessionsExpired(), 0, ''],
                        ['由于达到最大会话数而被拒绝创建的新会话总数', metric_info.getTomcatSessionsCreated(), 0, ''],
                        ['当前活动的会话数', metric_info.getTomcatSessionsActiveCurrent(), 0, ''],
                        ['同时活动的最大会话数', metric_info.getTomcatSessionsActiveMax(), 0, '']
                    ]
                }
            ]

            clientsList.value.push(client)
        }
        // console.log(clientsList.value)
    }

    id = setInterval(update, 500)

    onUnmounted(() => {
        if (id) {
            clearInterval(id)
            window.removeEventListener('beforeunload', () => {
                clearInterval(id)
            })
        }
    })

    return {
        clientsList,
        client_index,
        changeIndex
    }
})