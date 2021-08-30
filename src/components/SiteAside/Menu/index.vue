<template>
  <nav class="menu-container">
    <!-- 路由导航 -->
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.name"
      :to="{ name: item.name }"
      active-class="selected"
      exact-active-class=""
    >
      <Iconfont :type="item.icon" />
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Iconfont from "@/components/Iconfont";
export default {
  components: {
    Iconfont,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",//命名路由
          title: "文章",
          icon: "blog",
          //是否开启精确匹配
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style scope lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @lightWords;
  margin: 24px 0;
  a {
    display: block;
    height: 45px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .iconfont-container {
      width: 24px;
    }
    &.selected {
      background: @words;
      color: #fff;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>