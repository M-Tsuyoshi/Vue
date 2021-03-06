import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/helloJSX.jsx'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index/taro'
        },
        {
            path: '/jsx',
            redirect: '/jsx/hanako'
        },
        {
            path: '/index/:name',
            name: 'index',
            component: HelloWorld,
            props: true
        },
        {
            path: '/jsx/:name',
            name: 'jsx',
            component: HelloJSX,
            props: true
        },
    ],
})