import HomeView from './components/HomeView.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        name:'HomeView',
        component: HomeView,
        path: '/',
    },
    {
        name:'SignUp',
        component: SignUp,
        path: '/signup',
    },
    {
        name:'Login',
        component: LogIn,
        path: '/login',
    },
    {
        name: 'Add',
        component: Add,
        path: '/add'
    },
    {
        name: 'Update',
        component: Update,
        path: '/update/:id' 
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
console.log(router);
export default router;