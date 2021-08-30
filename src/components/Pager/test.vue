<template>
  <div id="app">
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("后续操作");
    },
  },
};
</script>

<style>
</style>
