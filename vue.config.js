// vue-cli的配置文件
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://test.my-blog.com",
            },
        },
    },
    configureWebpack: require("./webpack.config")
};