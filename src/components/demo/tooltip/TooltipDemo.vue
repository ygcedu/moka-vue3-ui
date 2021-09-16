<template>
  <h1>Tooltip 示例</h1>
  <Demo :component="Tooltip1Demo"/>
  <Attr :titles="titles" :data="data"/>
</template>

<script lang="ts">
import Demo from '../../Demo.vue';
import Tooltip1Demo from './Tooltip1.demo.vue';
import {titles} from '../../../lib';
import Attr from '../../Attr.vue';
import {ref} from 'vue';

export default {
  components: {
    Demo, Attr
  },
  setup() {
    const data = ref([
      {
        params: 'direction',
        desc: '显示位置',
        type: 'string',
        optionals: 'top / bottom',
        default: 'top'
      },
    ]);
    return {
      Tooltip1Demo,
      titles,
      data
    };
  }
};
</script>