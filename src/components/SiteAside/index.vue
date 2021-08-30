<template>
  <div class="siteAside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1>{{ data.siteTitle }}</h1>
    </template>

    <Menu />
    <Contact v-if="data" />
    <p v-if="data" class="footer">{{ data.icp }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scope lang="less">
@import "~@/styles/var.less";
.siteAside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    cursor: pointer;
    margin: 0 auto;
  }
  h1 {
    font-size: 1.2em;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  p {
    text-align: center;
    font-size: 14px;
  }
}
</style>