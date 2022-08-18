import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a8ec8a13632762d0a0cb5f55a7ec08fa503dc667.jpg",
        siteTitle: "哈木克的个人博客",
        github: "https://github.com/hamuke",
        qq: "894758642",
        qqQrCode: "@/assets/qrcode.png",
        weixin: "18150273857",
        weixinQrCode: "@/assets/qrcode.png",
        mail: "894758642@qq.com",
        icp: "闽ICP备17001719号",
        githubName: "github-hamuke",
        favicon: "@/assets/logo.png",
    },
});