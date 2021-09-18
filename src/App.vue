<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router';
import progress from 'nprogress';
import 'nprogress/nprogress.css';

export default {
  name: 'App',
  setup() {
    let width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide('asideVisible', asideVisible);// set

    router.beforeEach((to, from, next) => {
      progress.start();
      next();
    });

    // hack: 这里不管什么路由切换都会触发隐藏侧边栏菜单效果
    router.afterEach(() => {
      width = document.documentElement.clientWidth;
      if (width <= 500) {
        asideVisible.value = false;
      }
      progress.done();
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style lang="scss">
#nprogress {
  .bar {
    background: #6b9ab8 !important; //自定义颜色
  }

  .spinner-icon {
    border-color: #e5f2fa transparent transparent #e5f2fa;
  }
}
</style>