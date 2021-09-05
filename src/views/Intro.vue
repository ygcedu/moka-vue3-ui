<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script lang="js">
import md from '../markdown/intro.md';

export default {
  data() {
    return {md};
  }
};
</script>