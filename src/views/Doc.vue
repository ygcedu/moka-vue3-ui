<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="content">
      <aside :class="{visible:asideVisible}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch2">Switch2 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch3">Switch3 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tooltip">Tooltip 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    return {asideVisible};
  },
};
</script>
<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;

  > .nav {
    flex: 0;
  }

  > .content {
    display: flex;
    flex: 1;
    padding-top: 60px;
    padding-left: 156px;

    aside {
      position: fixed;
      top: 0;
      left: 0;
      margin-top: 70px;
      width: 260px;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      border-right: 1px solid #e8e8e8;
      padding-bottom: 32px;
      z-index: $aside-index;

      > h2 {
        margin-bottom: 4px;
        line-height: 22px;
        padding: 10px;
        font-size: 16px;
        font-weight: 700;
      }

      > ol {
        > li {
          position: relative;
          width: 100%;
          font-size: 14px;

          > a {
            display: block;
            padding: 12px 20px;
            cursor: pointer;
            color: #333;

            &:hover {
              background: #e5f2fa;
              border-bottom: none;
              text-decoration: none;
            }
          }

          .router-link-active {
            background-color: #e5f2fa;
            border-right: none;

            &:after {
              content: "";
              position: absolute;
              animation: .8s stretchY;
              top: 0;
              right: 0;
              height: 100%;
              border-right: 3px solid #109790;
            }

            @keyframes stretchY {
              0% {
                transform: rotateX(90deg)
              }

              100% {
                transform: rotateX(0)
              }
            }
          }
        }
      }
    }

    main {
      overflow: auto;
      flex: 1;
      padding-top: 20px;
      padding-left: 130px;
      padding-right: 20px;
    }
  }
}

::v-deep {
  .topnav {
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  }
}

@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;

      aside {
        width: 180px;
        background-color: #fff;
        transition: all 0.25s ease;
        transform: translateX(-200px);

        &.visible {
          transform: translateX(0px);
        }
      }

      main {
        overflow: auto;
        padding: 20px 8px;
        margin: 0 auto;
      }
    }
  }
}
</style>