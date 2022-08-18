<template>
  <div class="contact-container">
    <ul>
      <li>
        <a :href="data.github" target="_blank">
          <Iconfont type="github" />
          <span>{{ data.githubName }}</span>
        </a>
      </li>
      <li>
        <a :href="`mailto:${data.mail}`">
          <Iconfont type="mail" />
          <span>{{ data.mail }}</span>
        </a>
      </li>
      <li>
        <a
          :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
        >
          <Iconfont type="qq" />
          <span>{{ data.qq }}</span>
        </a>
        <div class="pop">
          <img src="@/assets/qrcode.png" />
        </div>
      </li>
      <li>
        <a>
          <Iconfont type="weixin" />
          <span>{{ data.weixin }}</span>
        </a>
        <div class="pop">
          <img src="@/assets/qrcode.png" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Iconfont from "@/components/Iconfont";
import { mapState } from "vuex";
export default {
  components: {
    Iconfont,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scope lang="less">
@import "~@/styles/var.less";
.contact-container {
  color: @gray;
  @itemHeight: 30px;
  li {
    margin: 10px;
    position: relative;
    height: @itemHeight;
    line-height: @itemHeight;
    a {
      cursor: pointer;
      display: flex;
      font-size: 14px;
      .iconfont-container {
        width: 36px;
        font-size: 26px;
      }
    }
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    .pop {
      transition: 0.3s;
      position: absolute;
      bottom: @itemHeight;
      left: 0;
      transform: scaleY(0);
      transform-origin: center bottom;
      img {
        border-radius: 10px;
        width: 180px;
        height: 180px;
      }
    }
  }
}
</style>