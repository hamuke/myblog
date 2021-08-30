<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handleLoadImage()"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoadImage() {
      console.log("加载图片完成");
    },
  },
};
</script>

<style soped lang="less">
.test-container {
  width: 500px;
  height: 400px;
}
</style>