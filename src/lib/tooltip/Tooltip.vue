<template>
  <div class="mk-tooltip">
    <slot/>
    <span class="mk-tooltip-text" :class="classes">{{ content }}</span>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    content: {
      type: String
    },
    direction: {
      type: String,
      default: 'top',
    }
  },
  setup(props) {
    const {direction} = props;
    const classes = computed(() => {
      return {
        [`mk-tooltip-${direction}`]: direction,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss" scoped>
.mk-tooltip {
  position: relative;
  display: inline-block;
  vertical-align: middle;

  > .mk-tooltip-text {
    visibility: hidden;
    font-size: 14px;
    white-space: nowrap;
    background-color: #292421;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 3px 6px;
    position: absolute;
    z-index: 1;
    transform: translate(-50%, -50%);
    margin-left: auto;
    margin-right: auto;
    top: -105%;
    left: 50%;

    &::after {
      content: "";
      position: absolute;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      top: 98%;
      left: 50%;
      border-color: #292421 transparent transparent transparent;
    }
  }

  &:hover .mk-tooltip-text {
    visibility: visible;


    &.mk-tooltip-top {
      top: -20px;
      left: 50%;

      &::after {
        top: 98%;
        left: 50%;
        border-color: #292421 transparent transparent transparent;
      }
    }

    &.mk-tooltip-bottom {
      top: 45px;
      left: 50%;

      &::after {
        top: -35%;
        left: 50%;
        border-color: transparent transparent #292421 transparent;
      }
    }
  }
}
</style>