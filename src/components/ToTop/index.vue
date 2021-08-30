<template>
  <div @click="handleClick" v-show="isShow" class="to-top-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.isShow = false;
        return;
      }
      this.isShow = dom.scrollTop >= 500;
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
</style>