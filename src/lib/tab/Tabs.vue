<template>
  <div class="mk-tabs">
    <div class="mk-tabs-nav" ref="container">
      <div class="mk-tabs-nav-item" v-for="(t,index) in titles" :ref="el => { if(t===selected) selectedItem=el }"
           @click="select(t)"
           :class="{selected: t=== selected}"
           :key="index">{{ t }}
      </div>
      <div class="mk-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="mk-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, onMounted, ref, watchEffect} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    // 只在第一次渲染执行
    onMounted(
      () => {
        watchEffect(() => {
          // 析构赋值重命名
          const {width, left: left2} = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + 'px';
          const {left: left1} = container.value.getBoundingClientRect();
          const left = left2 - left1;
          indicator.value.style.left = left + 'px';
        }, {flush: 'post'});
      }
    );

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      // @ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 tab');
      }
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
      current
    };
  }
}
</script>

<style lang="scss">
.mk-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      //transition: left 2s;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>