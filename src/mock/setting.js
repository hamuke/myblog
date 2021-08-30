import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://img1.baidu.com/it/u=212151557,58644506&fm=26&fmt=auto&gp=0.jpg",
        siteTitle: "哈木克的个人空间",
        github: "https://github.com/DuYi-Edu",
        qq: "894758642",
        qqQrCode: "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
        weixin: "18150273857",
        weixinQrCode: "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
        mail: "894758642@qq.com",
        icp: "闽ICP备17001719号",
        githubName: "DuYi-Edu",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    },
});