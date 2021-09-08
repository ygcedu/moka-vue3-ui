<template>
  <label class="mk-switch2">
    <input type="checkbox" class="checkbox">
  </label>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      // 定义一个 update:value 事件(为了使用 Vue 的 v-model 功能，这里不能改成其他的！)，通知父组件修改 value
      context.emit('update:value', !props.value);
      // this.$emit();
    };
    return {toggle};
  }
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

.mk-switch2 {
  display: flex;
  width: $h*2;
  height: $h;
  border: solid 1px #bfbfbf;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  overflow: hidden;

  > input {
    visibility: hidden;

    &::before {
      visibility: visible;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      transition: all 0.2s;
    }

    &::after {
      visibility: visible;
      content: '';
      position: absolute;
      height: $h2;
      width: $h2;
      left: 0;
      top: 0;
      background: #fff;
      border-radius: 50%;
      left: 1px;
      top: 1px;
      transition: all 0.2s;
    }

    &:checked::before {
      background: #1890ff;
    }

    &:checked::after {
      transform: translateX($h);
    }
  }
}
</style>