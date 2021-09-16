<demo>
顶部提示框
</demo>

<template>
  <Button>
    <Tooltip content="提示信息" direction="bottom">按钮</Tooltip>
  </Button>
</template>

<script lang="ts">
import {Button, Tooltip} from '../../../lib';

export default {
  components: {
    Tooltip, Button
  }
};
</script>