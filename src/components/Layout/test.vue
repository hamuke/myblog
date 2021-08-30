<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左侧区域</div>
      </template>
      <div class="main">
        主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏
      </div>
      <template #right>
        <div class="right">右侧区域</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 100%;
  height: 600px;
  .left {
    width: 200px;
    height: 100%;
    background: lightcoral;
  }
  .right {
    width: 150px;
    height: 100%;
    background: lightcoral;
  }
  .main {
    width: 100%;
    height: 100%;
    background: green;
  }
}
</style>