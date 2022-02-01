import Vue from "vue"
import VueRouter from "vue-router"


Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Mails",
        component: () => import("../views/Mails.vue"),
    },
]

const router = new VueRouter({
    mode: "history",
    base: "/mails",
    routes,
})

export default router
