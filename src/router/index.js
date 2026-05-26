import{createRouter, createWebHistory} from'vue-router'
import HomeViews from '../views/homeviews.vue'

const routes = [
    {
        path:'/',
        name: "home",
        component: HomeViews,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;