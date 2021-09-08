<template>
  <Switch3 v-model:value="bool"/>
</template>

<script lang="ts">
import Switch3 from '../../../lib/switch/Switch3.vue';
import {ref} from 'vue';

export default {
  components: {
    Switch3
  },
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  }
};
</script>