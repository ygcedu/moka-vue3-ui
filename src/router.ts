import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/demo/switch/SwitchDemo.vue';
import ButtonDemo from './components/demo/button/ButtonDemo.vue';
import DialogDemo from './components/demo/dialog/DialogDemo.vue';
import TabsDemo from './components/demo/tab/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import {h} from 'vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';
import Switch2Demo from './components/demo/switch/Switch2Demo.vue';
import Switch3Demo from './components/demo/switch/Switch3Demo.vue';
import TooltipDemo from './components/demo/tooltip/TooltipDemo.vue';

const history = createWebHashHistory();
const md = string => h(Markdown, {content: string, key: string});

export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'switch2', component: Switch2Demo},
        {path: 'switch3', component: Switch3Demo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'tooltip', component: TooltipDemo}
      ]
    }
  ]
});