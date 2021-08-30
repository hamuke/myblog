import axios from "axios";
import showMessage from "../utils/showMessage";

// 自定义 axios 实例添加拦截器
const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    // 根据接口文档
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: "error",
        });
        return null;
    }
    return resp.data.data;
});

export default ins;