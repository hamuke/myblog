<template>
  <ul class="rightList-container">
    <li v-for="(item, i) in list" :key="i">
      <span
        @click="handleClick(item)"
        :class="{
          active: item.isSelect,
        }"
        >{{ item.name }}</span
      >
      <span
        v-if="item.aside"
        @click="handleClick(item)"
        class="aside"
        :class="{ active: item.isSelect }"
      >
        {{ item.aside }}
      </span>
      <!-- 组件递归 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList", //让组件内部实现自我递归
  props: {
    list: {
      type: Array,
      // 如果默认值是空数组或者空对象时，应该写成函数返回值的形式
      default: () => [],
      // default: () => ({})
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.rightList-container {
  list-style: none;
  padding: 0;
  margin-left: 1.2em;
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
  .aside {
    font-size: 12px;
    margin-left: 1em;
    color: @gray;
  }
}
</style>