import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    }, {
      path: '/movie/:title',
      name: 'Detail',
      component: Detail
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
