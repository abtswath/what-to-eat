import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router/index';

import 'normalize.css/normalize.css';

import '@/styles/main.scss';

const app = createApp(App);
app.use(router);
app.mount('#app');
