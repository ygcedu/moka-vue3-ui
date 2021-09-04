import './lib/arw.scss';
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
// 本地引入阿里图标
// import './lib/svg';

const app = createApp(App);
app.use(router);
app.mount('#app');
