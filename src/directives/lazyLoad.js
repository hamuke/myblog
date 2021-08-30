import eventBus from "@/eventBus";
import defaultGif from "@/assets/default.gif";
import debounce from "@/utils/debounce";

let images = [];

// 什么情况下需要加载图片
function setImage(img) {
    img.dom.src = defaultGif;
    // 判断图片是否在视口范围
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        //在视口范围内
        const tempImg = new Image();
        tempImg.onload = function () {
            //加载完毕后替换默认图片
            img.dom.src = img.src;
        };
        tempImg.src = img.src;
        images = images.filter((i) => i !== img);
    }
}

// 设置需要加载的图片
function setImages() {
    for (const img of images) {
        setImage(img);
    }
}

function handleScroll() {
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {

    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        };
        images.push(img);
        // 立即处理它
        setImage(img);
    },
    unbind(el) {
        images = images.filter((img) => img.dom !== el);
    },
}