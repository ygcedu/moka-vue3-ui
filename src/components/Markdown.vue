<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = ref<string>(null);
    // hack: 可能会因为网络环境差异步加载缓慢，可以加一个 loading 效果
    // 异步动态 import
    import(props.path).then(result => {
      content.value = result.default;
    });
    return {content};
  }
};
</script>