import Mock from "mockjs";

// 记录用于生成响应数据的函数。当拦截到匹配 url 和 type 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。
Mock.mock("/api/banner", "get", {
    code: 0, // 错误码
    msg: "不知道哪里出错了", // 错误消息
    data: [ // 具体的消息内容，如果code不为0，则必为null
        {
            id: "1",
            midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
            title: "凛冬将至",
            description: "人唯有恐惧的时候方能勇敢",
        },
        {
            id: "2",
            midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
            title: "血火同源",
            description: "如果我回头，一切都完了",
        },
        {
            id: "3",
            midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
            title: "听我怒吼",
            description: "兰尼斯特有债必偿",
        },
    ]
});