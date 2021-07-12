import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './mock/index.js'

Vue.use(VueAxios, axios)

// 在man.js中引入
import wx from "weixin-jsapi"; 
// 在man.js中注册 
Vue.prototype.wx = wx


// 导入图标icon
import './assets/font_2595851_ssmehlegic/iconfont.css'

import { Icon,Search,Dialog,Swipe, SwipeItem, Lazyload  } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Search).use(Dialog).use(Swipe).use(SwipeItem).use(Lazyload);




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
