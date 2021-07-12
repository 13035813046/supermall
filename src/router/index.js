import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/saoyisao',
      name: 'saoyisao',
      component: ()=>import('viwes/saoyisao.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: ()=>import('viwes/index.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: ()=>import('viwes/test.vue')
    }
  ],
  // mode: 'history'
})
