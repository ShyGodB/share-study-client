import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/Index.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/layout',
            name: 'layout',
            component: Layout,
            redirect: '/layout/home',
            meta: { title: 'layout测试' },
            children: [
                {
                    path: 'home',
                    name: 'layouthome',
                    component: () => import('../components/TheWelcome.vue'),
                    meta: { title: '订单列表' },
                },
                {
                    path: 'about',
                    name: 'layoutabout',
                    component: () => import('../components/TheWelcome.vue'),
                    meta: { title: '订单详情' },
                },
            ],
        },
    ],
});

export default router;
