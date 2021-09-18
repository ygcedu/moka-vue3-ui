<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-moka"></use>
      </svg>
      <span>Moka UI</span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use :xlink:href="`#icon-menu-${asideVisible?'fold':'unfold'}`"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleMenu, asideVisible};
  },
};
</script>
<style lang="scss" scoped>
$color: #109790;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 8em;
    margin-right: auto;
    font-size: 18px;
    color: #1f2225;
    display: flex;
    align-items: center;

    > svg {
      width: 32px;
      height: 32px;
    }

    > span {
      margin-left: 10px;
    }

    &:hover {
      text-decoration: none;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }

    a:hover {
      text-decoration: none;
      border-bottom: 2px solid #46bd87;
    }
  }

  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 140px;

    top: 50%;
    transform: translateY(-50%);
    //display: none;
    fill: currentColor;
    //background: fade-out(black, 0.9);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
      left: 16px;
    }
  }
}
</style>