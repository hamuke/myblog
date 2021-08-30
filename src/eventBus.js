// Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
// Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
// const listeners = {}; //{event1:[handle1,handle2]}
// export default {
//     //监听事件
//     $on(eventName, handle) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handle);
//     },
//     //取消监听
//     $off(eventName, handle) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         listeners[eventName].delete(handle);
//     },
//     //触发监听事件
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         for (const handle of listeners[eventName]) {
//             handle(...args);
//         }
//     }
// }

// 事件总线
import Vue from "vue";
const app = new Vue({});
/*
* 事件名：mainScroll
* 含义：主区域滚动条位置变化后触发
* 参数：
* - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
*
* 事件名：setMainScroll
* 含义：当需要设置主区域滚动条位置时触发
* 参数：
* - 滚动高度
*/
Vue.prototype.$bus = app;
export default app;