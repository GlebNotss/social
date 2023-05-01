import { createApp } from 'vue';
import {router, store} from './providers';
import Style from './index.scss'
import App from './App.vue';

export const app = createApp(App).use(router).use(store);