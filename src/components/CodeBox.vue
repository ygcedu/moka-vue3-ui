<template>
  <Tooltip :content="tip">
    <div class="code-read" @click="toggle" :class="{'mk-code-expand':value}">
      <svg class="icon" v-if="value">
        <use xlink:href="#icon-code-alt"></use>
      </svg>
      <svg class="icon" v-else>
        <use xlink:href="#icon-code"></use>
      </svg>
    </div>
  </Tooltip>
</template>

<script lang="ts">
import Tooltip from '../lib/tooltip/Tooltip.vue';
import {ref} from 'vue';

export default {
  components: {
    Tooltip
  },
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
      tip.value = props.value ? '显示代码' : '收起代码';
    };
    const tip = ref('显示代码');
    return {toggle, tip};
  }
};
</script>

<style lang="scss" scoped>
.code-read {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 5px;

  .icon {
    width: 32px;
    height: 32px;
  }

  &:hover {
    .icon {
      transform: scale(1.2);
    }
  }
}
</style>