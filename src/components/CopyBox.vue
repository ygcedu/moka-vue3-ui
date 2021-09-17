<template>
<span class="code-copy" @click="copy" @mouseout="tip='复制代码'"
      data-clipboard-action="copy"
      :data-clipboard-text="sourceCode">
  <Tooltip :content="tip">
    <svg class="icon">
      <use xlink:href="#icon-copy"></use>
    </svg>
  </Tooltip>
</span>
</template>

<script lang="ts">
import Tooltip from '../lib/tooltip/Tooltip.vue';
import {ref} from 'vue';
import Clipboard from 'clipboard';

export default {
  components: {
    Tooltip
  },
  props: {
    sourceCode: String,
    default: ''
  },
  setup(props) {
    const {sourceCode} = props;
    const tip = ref('复制代码');
    const copy = () => {
      const clipboard = new Clipboard('.code-copy');
      clipboard.on('success', e => {
        tip.value = '复制成功';
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on('error', e => {
        // 不支持复制
        tip.value = '该浏览器不支持自动复制';
        // 释放内存
        clipboard.destroy();
      });
    };
    return {copy, tip, sourceCode};
  }
};
</script>

<style lang="scss" scoped>
.code-copy {
  display: flex;
  align-items: center;
  margin-right: 15px;

  .icon {
    width: 16px;
    height: 16px;
  }

  &:hover {
    .icon {
      transform: scale(1.2);
    }
  }
}
</style>