<demo>
基本用法
</demo>
<template>
  <div>
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script lang="ts">
// hack:最好换成用户可以直接使用的形式
import {Button} from '../../../lib/index';

export default {
  components: {
    Button
  }
};
</script>