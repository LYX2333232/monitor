import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'index',
        component: () => import('../view/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../view/home/index.vue')
            },
            {
                path: '/CPU',
                name: 'CPU',
                component: () => import('../view/CPU/index.vue')
            },
            {
                path: '/memory',
                name: 'memory',
                component: () => import('../view/memory/index.vue')
            },
            {
                path: '/disk',
                name: 'disk',
                component: () => import('../view/disk/index.vue')
            },
            {
                path: '/network',
                name: 'network',
                component: () => import('../view/network/index.vue')
            },
            {
                path: '/TCP',
                name: 'TCP',
                component: () => import('../view/TCP/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router