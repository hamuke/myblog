<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
  components: {
    Menu,
  },
};
</script>

<style>
.test-container {
  width: 250px;
  height: 500px;
  background: #000;
  margin: 0 auto;
  padding-top: 200px;
}
</style>