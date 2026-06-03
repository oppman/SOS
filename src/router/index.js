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
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
    {
        path:'/',
        name: "Home",
        component: Home,
    },
    {
        path:"/about",
        name: "About",
        component: About
    },   
    {
        path:"/services",
        name: "Services",
        component: Services
    }, 
    {
        path:"/contact",
        name: "Contact",
        component: Contact
    },{
        path:"/photos",
        name: "Photos",
        component: Photos
    },
    {
        path:"/videos",
        name: "Videos",
        component: Videos
    },    {
        path:"/southern",
        name: "Southern",
        component: Southern
    },
    {
        path:"/northern",
        name: "Northern",
        component: Northern
    },
    {
        path:"/western",
        name: "Western",
        component: Western
    },
    {
        path:"/eastern",
        name: "Eastern",
        component: Eastern
    },
    {
        path:"/kigali",
        name: "Kigali",
        component: Kigali
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
    }

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to) => {
  const isAuthenticated = Boolean(window.localStorage.getItem('sos-user'));

  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: "Login" };
  }

  if ((to.name === "Login" || to.name === "Register") && isAuthenticated) {
    return { name: "Dashboard" };
  }
});

export default router;