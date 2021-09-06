<template>
  <router-view/>
</template>

<script lang="ts" setup>
import {provide, ref} from 'vue';
import {router} from './router';

const width = document.documentElement.clientWidth;
const asideVisible = ref(width <= 500 ? false : true);
provide('asideVisible', asideVisible);// set

// hack: 这里不管什么路由切换都会触发隐藏侧边栏菜单效果
router.afterEach(() => {
  if (width <= 500) {
    asideVisible.value = false;
  }
});
</script>
