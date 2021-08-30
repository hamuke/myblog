<template>
  <div class="test-container">
    <div class="item" v-for="t in types" :key="t">
      <Iconfont :type="t" />
    </div>
  </div>
</template>

<script>
import Iconfont, { types } from "./";
export default {
  components: {
    Iconfont,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style scoped>
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  margin: 1em;
  text-align: center;
}
.icon-container {
  display: block;
}
</style>