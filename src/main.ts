import './lib/moka.scss';
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css';
import Markdown from './components/Markdown.vue';
// 本地引入阿里图标
// import './lib/svg';

const app = createApp(App);
app.use(router);
app.mount('#app');
// 全局引入 Markdown 组件
app.component('Markdown', Markdown);
