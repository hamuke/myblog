<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //属性类型
      required: true, //属性必传
    },
    size: {
      type: Number,
      default: 150, //默认值
    },
  },
};
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>