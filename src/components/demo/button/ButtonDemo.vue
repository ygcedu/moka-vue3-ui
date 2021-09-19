<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
    <Attr :titles="titles" :data="data"/>
  </div>
</template>

<script lang="ts">
import Demo from '../../Demo.vue';
import Attr from '../../Attr.vue';
import Button1Demo from './Button1.demo.vue';
import Button2Demo from './Button2.demo.vue';
import Button3Demo from './Button3.demo.vue';
import Button4Demo from './Button4.demo.vue';
import Button5Demo from './Button5.demo.vue';
import {ref} from 'vue';
import {titles} from '../../../lib';

export default {
  components: {
    Demo, Attr
  },
  setup() {
    const data = ref([
      {
        params: 'theme',
        desc: '按钮类型',
        type: 'string',
        optionals: 'primary / warning / success / danger / info / link',
        default: 'default',
      },
      {
        params: 'size',
        desc: '尺寸大小',
        type: 'string',
        optionals: 'small / normal / large',
        default: 'normal',
      },
      {
        params: 'loading',
        desc: '是否加载',
        type: 'boolean',
        optionals: 'false / true',
        default: 'false',
      }
    ]);
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      titles,
      data
    };
  },
};
</script>