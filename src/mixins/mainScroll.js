export default function (refName) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refName].addEventListener("scroll", this.handleMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll");
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
            this.$refs[refName].removeEventListener("scroll", this.handleMainScroll);
        },
        methods: {
            handleSetMainScroll(scrollTop) {
                this.$refs[refName].scrollTop = scrollTop;
            },
            handleMainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refName]);
            },
        },
    };
}