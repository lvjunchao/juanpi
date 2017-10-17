import Vue from 'vue'
import Router from 'vue-router'
import AppTodayNew from '../components/todayNew/AppTodyNew'
import AppOurBest from '../components/ourBest/AppOurBest'
import AppMine from '../components/mine/AppMine'
import AppGlobalBuy from '../components/globalBuy/AppGlobalBuy'
import AppBuyCar from '../components/buyCar/AppBuyCar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'today',
      component:AppTodayNew

    },
    {
      path:'/today',
      name:'today',
      component:AppTodayNew

    },
    {
      path:'/best',
      name:'best',
      component:AppOurBest

    },
    {
      path:'/global',
      name:'global',
      component:AppGlobalBuy
    },
    {
      path:'/buycar',
      name:'buycar',
      component:AppBuyCar
    },
    {
      path:'/mine',
      name:'mine',
      component:AppMine
    },
  ]
})
