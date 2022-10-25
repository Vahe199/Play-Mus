import {createRouter, createWebHashHistory} from "vue-router";
import SVGBtn from "@/components/SVGBtn";
import PlayList from "@/components/Playlist";



const routes = [
    { path: '/',name:'SVGBtn', component: SVGBtn },
    { path: '/play',name:'PlayList', component: PlayList },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
