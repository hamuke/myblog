<template>
  <div class="imageLoader-container">
    <img v-if="!isDone" class="placeholder" :src="placeholder" />
    <img
      :src="src"
      @load="loadImage"
      :style="{ opacity: finalOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    // 原始图片的路径
    src: {
      type: String,
      required: true,
    },
    // 原始图片加载完成前的占位图片
    placeholder: {
      type: String,
      required: true,
    },
    // 原始图片加载完成后，切换到原始图经过的毫秒数
    duration: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      // 控制透明度
      imgOpacity: false,
      // 控制占位图消失
      isDone: false,
    };
  },
  computed: {
    finalOpacity() {
      return this.imgOpacity ? 1 : 0;
    },
  },
  methods: {
    loadImage() {
      this.imgOpacity = true;
      setTimeout(() => {
        this.isDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scope lang="less">
@import "~@/styles/mixin.less";
.imageLoader-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .placeholder {
    filter: blur(8px);
  }
  img {
    .self-fill();
    object-fit: cover;
  }
}
</style>