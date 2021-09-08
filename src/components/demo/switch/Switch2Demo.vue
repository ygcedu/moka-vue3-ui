<template>
  <Switch2 v-model:value="bool"/>
</template>

<script lang="ts">
import Switch2 from '../../../lib/switch/Switch2.vue';
import {ref} from 'vue';

export default {
  components: {
    Switch2
  },
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  }
};
</script>