import "nprogress/nprogress.css";
import {
    start,
    done,
    configure
} from "nprogress";
import NotFound from "@/views/NotFound.vue";

// 配置进度条
configure({
    trickleSpeed: 10,
    showSpinner: false,
})

function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}
// 异步组件
function getPageComponent(pageCompResolver) {
    return async () => {
        start();
        if (process.env.NODE_ENV === "development") {
            await delay(2000);
        }
        const comp = await pageCompResolver();
        done();
        return comp;
    }
}

// 页面分包，动态导入
export default [{
        name: "Home",
        path: "/",
        component: getPageComponent(() => import( /* webpackChunkName: "home" */ "@/views/Home")),
        meta: {
            title: "首页",
        },
    },
    {
        name: "About",
        path: "/about",
        component: getPageComponent(() => import( /* webpackChunkName: "about" */ "@/views/About")),
        meta: {
            title: "关于我",
        },
    },
    {
        name: "Blog",
        path: "/article",
        component: getPageComponent(() => import( /* webpackChunkName: "blog" */ "@/views/Blog")),
        meta: {
            title: "文章",
        },
    },
    {
        name: "CategoryBlog",//命名路由
        path: "/article/cate/:categoryId",//动态路由
        component: getPageComponent(() => import( /* webpackChunkName: "blog" */ "@/views/Blog")),
        meta: {
            title: "文章",
        },
    },
    {
        name: "BlogDetail",
        path: "/article/:id",
        component: getPageComponent(() => import( /* webpackChunkName: "BlogDetail" */ "@/views/Blog/Detail")),
        meta: {
            title: "文章详情",
        },
    },
    {
        name: "Project",
        path: "/project",
        component: getPageComponent(() => import( /* webpackChunkName: "project" */ "@/views/Project")),
        meta: {
            title: "项目&效果",
        },
    },
    {
        name: "Message",
        path: "/message",
        component: getPageComponent(() => import( /* webpackChunkName: "message" */ "@/views/Message")),
        meta: {
            title: "留言板",
        },
    },
    {
        name: "NotFound",
        path: "*",
        component: NotFound,
        meta: {
            title: "404",
        },
    }
];