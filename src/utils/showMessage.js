import getComponentRootDom from "./getComponentRootDom";
import Iconfont from "@/components/Iconfont";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 消息出现持续时间
 * @param {HTMLElement} container 容器，消息出现在容器的中间，没有则出现在页面的中间
 * @param {*} options 
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    //创建消息元素
    const div = document.createElement("div");
    const icon = getComponentRootDom(Iconfont, {
        type,
    });
    // 添加内容
    div.innerHTML = `<span class="${styles.icon}">${icon.outerHTML}</span><p>${content}</p>`;
    //设置样式
    div.className = `${styles.message} ${styles[`message-${type}`]}`;
    //判断一下容器的position
    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    }
    //将div添加到容器中
    container.appendChild(div);

    // 让浏览器强行渲染
    div.clientHeight;

    //消息出现
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    //消息消失
    setTimeout(function () {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        // 清除消息元素
        div.addEventListener("transitionend", function () {
            div.remove();
            options.callback && options.callback();
        }, {
            once: true
        });
    }, duration);
}