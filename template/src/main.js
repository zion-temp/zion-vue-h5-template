import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';

import router from './router'
import store from './store'

createApp(App).use(Vant).use(store).use(router).mount('#app')
