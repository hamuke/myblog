<template>
  <!-- v-loading：自定义指令 -->
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      class="carousel"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Carousel :carousel="item" />
      </li>
    </ul>
    <div v-show="index > 0" class="icon arrowUp" @click="switchTo(index - 1)">
      <Iconfont type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      class="icon arrowDown"
      @click="switchTo(index + 1)"
    >
      <Iconfont type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: index === i }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Iconfont from "@/components/Iconfont";
import { mapState } from "vuex";
export default {
  components: {
    Carousel,
    Iconfont,
  },
  data() {
    return {
      index: 0, //当前图片索引
      height: 0, //容器的高度
      wheeling: false, //是否在滚动
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.height = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.height + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    async fetchData() {
      return await getBanners();
    },
    switchTo(i) {
      this.index = i;
    },
    // 鼠标滚动图片
    handleWheel(e) {
      if (this.wheeling) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.wheeling = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.wheeling = true;
        this.index++;
      }
    },
    // 滚动结束
    handleTransitionEnd() {
      this.wheeling = false;
    },
    // 窗口变化
    handleResize() {
      this.height = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .carousel {
    width: 100%;
    height: 100%;
    color: #fff;
    transition: 0.5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center();
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    @gap: 25px;
    &.arrowUp {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.arrowDown {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump: 8px;
    @keyframes jump-up {
      0% {
        transform: translate(50%, @jump);
      }
      50% {
        transform: translate(50%, -@jump);
      }
      100% {
        transform: translate(50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(50%, -@jump);
      }
      50% {
        transform: translate(50%, @jump);
      }
      100% {
        transform: translate(50%, -@jump);
      }
    }
  }
  .indicator {
    .self-center();
    left: auto;
    right: 20px;
    li {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid #fff;
      cursor: pointer;
      margin-bottom: 10px;
      background: @words;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>