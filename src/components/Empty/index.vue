<template>
  <div class="empty-container">
    <Iconfont type="empty"/>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Iconfont from "../Iconfont";
export default {
  components: {
    Iconfont,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .self-center();
  color: gray;
  text-align: center;
}
.iconfont-container{
  font-size: 72px ;
}
</style>