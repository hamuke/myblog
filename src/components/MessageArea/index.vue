<template>
  <div class="messageArea-container">
    <DataForm v-on="$listeners" />
    <h2>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h2>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style lang="less" scoped>
.loading {
  position: relative;
  height: 100px;
}
</style>