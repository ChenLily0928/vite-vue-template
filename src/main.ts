import { createApp } from 'vue';
import vuetify from '@configs/vuetify';
import globalRouter from '@router/globalRouter';
import App from './App.vue';

import './main.scss';

const app = createApp(App);

app.use(globalRouter) // 使用路由
    .use(vuetify) // 使用 Vuetify
    .mount('#app');
