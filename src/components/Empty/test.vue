<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 400px;
  height: 400px;
  border: 1px solid black;
  position: relative;
}
</style>