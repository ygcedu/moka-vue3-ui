<template>
  <h1>Radio 单选框示例</h1>
  <Demo :component="Radio1Demo"/>
  <Demo :component="Radio2Demo"/>

  <Attr :titles="titles" :data="data"></Attr>
</template>

<script lang="ts">
import Radio1Demo from './Radio1.demo.vue';
import Radio2Demo from './Radio1.demo.vue';
import Demo from '../../Demo.vue';
import Attr from '../../Attr.vue';
import {ref} from 'vue';
import {titles} from '../../../lib';

export default {
  name: 'RadioDoc',
  components: {Attr, Demo},
  setup() {
    const data = ref([
      {
        params: 'label',
        desc: '相当于原生radio标签的value',
        type: 'string / number / boolean',
        optionals: '自定义',
        default: '自定义',
      },
      {
        params: 'v-model:value',
        desc: '双向绑定',
        type: '随着label属性类型改变',
        optionals: '自定义',
        default: 'label属性中的任意一个值',
      },
    ]);
    return {Radio1Demo, Radio2Demo, data, titles};
  }
};
</script>