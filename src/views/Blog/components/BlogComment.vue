<template>
  <div class="blogComment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    // 加载更多评论
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100;
      const dis = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dis <= range) {
        this.fetchMore();
      }
    },
    async handleSubmit(formdata, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formdata,
      });
      // 最新评论发布置顶
      this.data.rows.unshift(resp);
      this.data.total++;
      callback(); //处理完通知子组件继续后续操作
    },
  },
};
</script>

<style scoped lang="less">
.blogComment-container {
  margin: 30px 0;
}
</style>