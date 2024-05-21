import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ProductContent from "@/pages/ProductContent.vue";
import LoginPage from "@/pages/LoginPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/product/content',
        component: ProductContent
    },
    {
        path: '/login',
        component: LoginPage
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
