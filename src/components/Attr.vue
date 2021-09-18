<template>
  <div class="attr">
    <h1>Props</h1>
    <table class="attr-table">
      <thead>
      <tr>
        <th v-for="(title,index) in titles" :key="index">{{ title.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="attr in data">
        <td v-for="(title,index) in titles" :key="index">{{ attr[title.key] || '—' }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'attr',
  props: {
    titles: {
      type: Object
    },
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.attr {
  width: 100%;
  overflow-x: auto;

  > .attr-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5em;
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    &:hover {
      box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
    }
  }

  th, td {
    text-align: left;
    // white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }

  td {
    color: #606266;
    font-size: 14px;
    //word-wrap: break-word;
    word-break: keep-all;
  }
}
</style>