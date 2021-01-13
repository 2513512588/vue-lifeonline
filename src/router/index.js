import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component: ()=> import('@/layout/index/index')
    },
    {
        path: '/diary/detail',
        component: ()=> import('@/layout/diary/detail')
    },
    {
        path: "/publish",
        component: ()=>import('@/layout/diary/publish')
    },
    {
        path: "/product/detail",
        component: ()=>import('@/layout/product/detail')
    },
    {
        path: "/product/settlement",
        component: ()=>import('@/layout/product/settlement')
    },
    {
        path: "/profile",
        component: ()=>import('@/layout/profile')
    },
    {
        path: "/homepage",
        component: ()=>import('@/layout/profile/home')
    },
    {
        path: "/classify",
        component: ()=>import('@/layout/classify')
    },
    {
        path: "/classify/detail",
        component: ()=>import('@/layout/classify/detail')
    },
    {
        path: "/message",
        component: ()=>import('@/layout/message')
    },
    {
        path: "/login",
        component: ()=>import('@/layout/profile/login')
    },
    {
        path: "/user/list",
        component: ()=>import('@/layout/profile/list')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router
