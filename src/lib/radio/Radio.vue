<template>
  <label class="mk-radio" :class="{'is-checked': label === model}">
    <span class="mk-radio_input">
      <span class="mk-radio_inner"></span>
      <input
        class="mk-radio_original"
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="mk-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'Radio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: null
  },
  setup(props, context) {
    const model = computed({
      get() {
        return props.value;
      },
      set(value) {
        context.emit('update:value', value);
      }
    });
    return {model};
  }
};
</script>

<style lang="scss" scoped>
.mk-radio {
  color: #606266;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  display: inline-block;
  outline: none;
  margin-right: 20px;

  & .mk-radio_input {
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .mk-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .25s ease-in;
      }
    }

    .mk-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      mk-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  & .mk-radio_label {
    padding-left: 10px;
  }

  &.is-checked {
    .mk-radio_input {
      .mk-radio_inner {
        border-color: #40babf;
        background: #40babf;

        &:after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }

    .mk-radio_label {
      color: #40babf;
    }
  }
}
</style>