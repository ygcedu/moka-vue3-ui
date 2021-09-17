<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <CopyBox :sourceCode="component.__sourceCode"></CopyBox>
      <CodeBox v-model:value="codeVisible"></CodeBox>
    </div>
    <div class="demo-code" v-if="codeVisible">
        <pre class="language-html"
             v-html="html"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/button/Button.vue';
import CodeBox from './CodeBox.vue';
import CopyBox from './CopyBox.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;

export default {
  components: {
    Button, CodeBox, CopyBox
  },
  props: {
    component: Object
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const codeVisible = ref(false);
    return {Prism, html, codeVisible};
  }
};
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
    color: #ccc;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #f9fafc;
    }
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

  &:hover {
    box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
  }
}
</style>