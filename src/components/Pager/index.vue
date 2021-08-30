<template>
  <!-- 只有当页码大于1时才显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="changePage(1)" :class="{ disable: current === 1 }">|&lt;&lt;</a>
    <a @click="changePage(current - 1)" :class="{ disable: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="changePage(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a
      @click="changePage(current + 1)"
      :class="{ disable: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="changePage(pageNumber)"
      :class="{ disable: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 每页限制数据量
    limit: {
      type: Number,
      default: 10,
    },
    // 最多显示页码数
    visibleNum: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 页码总数=总数据量/每页限制数据量
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 当前显示页码的最小值
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNum / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 当前显示页码的最大值
    visibleMax() {
      let max = this.visibleMin + this.visibleNum - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    // 当前显示页码
    numbers() {
      let curVisbleNums = [];
      for (var i = this.visibleMin; i <= this.visibleMax; i++) {
        curVisbleNums.push(i);
      }
      return curVisbleNums;
    },
  },
  methods: {
    changePage(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      // 抛出一个事件让父级处理
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disable {
      color: @lightWords;
      cursor: default;
    }
    &.active {
      color: @words;
      font-weight: bold;
    }
  }
}
</style>