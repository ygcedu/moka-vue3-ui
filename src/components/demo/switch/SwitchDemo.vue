<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
    <Attr :titles="titles" :data="data"/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Demo from '../../Demo.vue';
import Attr from '../../Attr.vue';
import {titles} from '../../../lib';
import {ref} from 'vue';


export default {
  components: {
    Demo, Attr
  },
  setup() {
    const data = ref([
      {
        params: 'value',
        desc: '是否选中',
        type: 'boolean',
        optionals: 'false / true',
        default: 'false',
      }
    ]);
    return {
      Switch1Demo,
      Switch2Demo,
      titles,
      data
    };
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>