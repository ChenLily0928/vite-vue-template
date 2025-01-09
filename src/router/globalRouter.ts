import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodoList from '../views/todo/TodoList.vue';

const globalRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/todo',
            name: 'todo',
            component: TodoList,
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/login/LoginPage.vue'),
        },
    ],
});

// Workaround for https://github.com/vitejs/vite/issues/11804
globalRouter.onError((err, to) => {
    if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
        if (!localStorage.getItem('vuetify:dynamic-reload')) {
            console.log('Reloading page to fix dynamic import error');
            localStorage.setItem('vuetify:dynamic-reload', 'true');
            location.assign(to.fullPath);
        } else {
            console.error('Dynamic import error, reloading page did not fix it', err);
        }
    } else {
        console.error(err);
    }
});

globalRouter.isReady().then(() => {
    localStorage.removeItem('vuetify:dynamic-reload');
});

export default globalRouter;
