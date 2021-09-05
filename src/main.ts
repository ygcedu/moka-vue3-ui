import './lib/moka.scss';
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css';
// 本地引入阿里图标
// import './lib/svg';

const app = createApp(App);
app.use(router);
app.mount('#app');
