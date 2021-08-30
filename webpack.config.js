const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
    module.exports = {
        plugins: [new BundleAnalyzerPlugin()],
        // 不对公共库进行打包，使用cdn
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
        },
    };
} else {
    module.exports = {}
}