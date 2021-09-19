<demo>
单标签 - 用 label 代替内容
</demo>

<template>
  <Radio label="学习" v-model:value="labelVal"/>
  <Radio label="娱乐" v-model:value="labelVal"/>
  <div class="picked">Picked:{{ labelVal }}</div>
</template>

<script lang="ts">
import {ref} from 'vue';
import {Radio} from '../../../lib/index';

export default {
  components: {Radio},
  setup() {
    const labelVal = ref('娱乐');
    return {labelVal};
  }
};
</script>

<style lang="scss" scoped>
.picked {
  padding: 10px 0;
}
</style>