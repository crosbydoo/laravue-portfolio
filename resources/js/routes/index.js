import {createRouter, createWebHistory} from "vue-router";

import main from "../components/main/main.vue"

import team from "../components/main/team.vue"

import tentang from "../components/main/tentang.vue"

import notFound from "../components/notFound.vue"


const routes = [
    {
        path: '/',
        component: main
    },

    {
        path: '/team',
        component: team
    },

    {
        path: '/tentang',
        component: tentang
    },

    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router