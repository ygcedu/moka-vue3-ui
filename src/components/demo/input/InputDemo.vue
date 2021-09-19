<template>
  <h1>Input 输入框示例</h1>
  <Demo :component="Input1Demo"/>
  <Demo :component="Input2Demo"/>
  <Demo :component="Input3Demo"/>
  <Attr :titles="titles" :data="data"></Attr>
</template>

<script lang="ts">
import Input1Demo from './Input1.demo.vue';
import Input2Demo from './Input2.demo.vue';
import Input3Demo from './Input3.demo.vue';
import Demo from '../../Demo.vue';
import Attr from '../../Attr.vue';
import {ref} from 'vue';
import {titles} from '../../../lib';

export default {
  components: {Attr, Demo},
  setup() {
    const data = ref([
      {
        params: 'placeholder',
        desc: '占位符',
        type: 'string',
        optionals: '任意字符串',
        default: '空',
      },
      {
        params: 'name',
        desc: 'name属性',
        type: 'string',
        optionals: '任意字符串',
        default: '空',
      },
      {
        params: 'type',
        desc: '文本框类型',
        type: 'string',
        optionals: '支持所有原生input的类型',
        default: 'text',
      },
      {
        params: 'disabled',
        desc: '禁用',
        type: 'boolean',
        optionals: 'false/true',
        default: 'false',
      },
    ]);
    return {Input1Demo, Input2Demo, Input3Demo, data, titles};
  }
};
</script>