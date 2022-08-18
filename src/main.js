//入口文件
import "./mock"
import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from './router';
import "./eventBus";
import store from "./store";
store.dispatch("setting/fetchSetting");
// 将方法加入到vue原型中,便于所有的组件使用
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;
//注册全局指令
import Loading from "./directives/loading";
import lazyLoad from "./directives/lazyLoad";
Vue.directive("loading", Loading);
Vue.directive("lazyLoad", lazyLoad);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
