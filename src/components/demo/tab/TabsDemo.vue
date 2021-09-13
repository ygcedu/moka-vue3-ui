<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo"/>
  <Attr :titles="titles" :data="data"/>
</template>

<script lang="ts">
import Demo from '../../Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue';
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
        params: 'tab-item',
        desc: 'tab页签',
        type: 'component',
        optionals: 'tab-item',
        default: '--',
      },
    ]);
    return {
      Tabs1Demo,
      titles,
      data
    };
  }
};
</script>