<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo"/>
  <Demo :component="Dialog2Demo"/>
  <Attr :titles="titles" :data="data"/>
</template>

<script lang="ts">
import Demo from '../../Demo.vue';
import Attr from '../../Attr.vue';
import {titles} from '../../../lib';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import {ref} from 'vue';

export default {
  components: {
    Demo, Attr
  },
  setup() {
    const data = ref([
      {
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        optionals: 'true / false',
        default: 'normal',
      },
      {
        params: 'width',
        desc: '宽度',
        type: 'string',
        optionals: '0%~100%',
        default: '60%',
      },
      {
        params: 'top',
        desc: '顶部距离',
        type: 'string',
        optionals: '数字+px',
        default: '130px',
      },
      {
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        optionals: 'true / false',
        default: 'normal',
      },
      {
        params: 'closeOnClickOverlay',
        desc: '是否点击遮罩层关闭弹出框',
        type: 'boolean',
        optionals: 'true / false',
        default: 'false',
      },
      {
        params: 'ok',
        desc: '确认触发函数',
        type: 'function',
        optionals: '()=>{}',
        default: '--',
      },
      {
        params: 'cancel',
        desc: '取消触发函数',
        type: 'function',
        optionals: '()=>{}',
        default: '--',
      },
    ]);
    return {
      Dialog1Demo,
      Dialog2Demo,
      titles,
      data
    };
  }
}
</script>