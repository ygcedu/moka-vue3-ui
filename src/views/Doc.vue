<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav noselect"/>
    <div class="content" :class="{asideVisible}">
      <aside class="noselect">
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
        <h2>{{ '组件列表' }}</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/switch2">Switch2 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/switch3">Switch3 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹出框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
          <li>
            <router-link to="/doc/tooltip">Tooltip 文字提示</router-link>
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
import {titles} from '../menu-options';

export default {
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    return {asideVisible, titles};
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
    //padding-left: 156px;

    &.asideVisible {
      > aside {
        transform: translateX(0px);
      }

      > main {
        overflow: auto;
        flex: 1;
        padding-top: 20px;
        padding-left: 280px;
        padding-right: 20px;
      }
    }

    aside {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      margin-top: 64px;
      width: 260px;
      height: auto;
      overflow-x: hidden;
      overflow-y: auto;
      border-right: 1px solid #e8e8e8;
      padding-bottom: 32px;
      z-index: $aside-index;
      transition: all 0.25s ease;
      transform: translateX(-260px);

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
              //background-image: linear-gradient(90deg, #fff, #02bc76);
              border-bottom: none;
              text-decoration: none;
            }
          }

          .router-link-active {
            color: #109790;
            background-color: #e5f2fa;
            //background-image: linear-gradient(90deg, #fff, #02bc76);
            border-right: none;

            &:after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              height: 100%;
              animation: .8s stretchY;
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
      padding: 20px;
      margin: 0 auto;
    }
  }
}

::v-deep(.topnav) {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
}

@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;

      &.asideVisible {
        > aside {
          transform: translateX(0px);
        }

        > main {
          overflow: auto;
          padding: 20px 8px;
          margin: 0 auto;
        }
      }

      aside {
        width: 180px;
        background-color: #fff;
        transition: all 0.25s ease;
        transform: translateX(-200px);
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