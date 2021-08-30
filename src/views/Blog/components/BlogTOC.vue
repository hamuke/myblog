<template>
  <div class="blogTOC-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import debounce from "@/utils/debounce"
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    //根据toc内容和activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          // 递归
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    // 根据toc得到对应的元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            // 递归
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    //设置activeAnchor为正确的值
    setSelect() {
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        // 得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>