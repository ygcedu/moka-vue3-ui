<template>
  <Tooltip :content="tip">
    <div class="code" @click="toggle" :class="{'mk-code-expand':value}">
      <div class="arrow-left"></div>
      <div class="bias"></div>
      <div class="arrow-right"></div>
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
$expand-width: 24px;
$icon-color: #999;

.code {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: $expand-width;
  width: $expand-width * 1.1;
  transition: transform 250ms;
  transform: scale(0.8);

  > .arrow-left {
    position: absolute;
    left: 0;
    width: $expand-width / 2;
    height: $expand-width / 2;
    border-top: 1px solid $icon-color;
    border-left: 1px solid $icon-color;
    transform: rotate(-45deg);
  }

  > .arrow-right {
    position: absolute;
    right: 0;
    width: $expand-width / 2;
    height: $expand-width / 2;
    border-top: 1px solid $icon-color;
    border-right: 1px solid $icon-color;
    transform: rotate(45deg);
  }

  &.mk-code-expand > .bias {
    width: 100%;
    height: 1px;
    background: $icon-color;
    transform: rotateZ(-72deg) scale(0.9);
  }

  &:hover {

    > .arrow-left {
      border-width: 2px;
    }

    > .arrow-right {
      border-width: 2px;
    }

    > .bias {
      height: 2px;
    }
  }
}
</style>