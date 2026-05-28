import{createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import Photos from "../views/Photos.vue";
import Videos from "../views/Videos.vue";
import Northern from "../views/Northern.vue";
import Southern from "../views/Southern.vue";
import Western from "../views/Western.vue";
import Eastern from "../views/Eastern.vue";
import Kigali from "../views/Kigali.vue";

const routes = [
    {
        path:'/',
        name: "Home",
        component: Home,
    },
    {
        path:"/About",
        name: "About",
        component: About
    },   
    {
        path:"/Services",
        name: "Services",
        component: Services
    }, 
    {
        path:"/Contact",
        name: "Contact",
        component: Contact
    },{
        path:"/Photos",
        name: "Photos",
        component: Photos
    },
    {
        path:"/Videos",
        name: "Videos",
        component: Videos
    },    {
        path:"/Southern",
        name: "Southern",
        component: Southern
    },
    {
        path:"/Northern",
        name: "Northern",
        component: Northern
    },
    {
        path:"/Western",
        name: "Western",
        component: Western
    },
    {
        path:"/Eastern",
        name: "Eastern",
        component: Eastern
    },
    {
        path:"/Kigali",
        name: "Kigali",
        component: Kigali
    }

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;