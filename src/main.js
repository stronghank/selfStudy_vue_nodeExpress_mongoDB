// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vodal from 'vodal'
import axios from 'axios'
import toastr from 'toastr'
// import 'vodal/fade.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'toastr/build/toastr.min.css'
import './assets/icon.css'

Vue.use(MuseUI)
Vue.prototype.$http = axios
Vue.prototype.toastr = toastr
Vue.config.productionTip = false
Vue.component(Vodal.name, Vodal)

toastr.options = {
  'closeButton': true,
  'debug': false,
  'newestOnTop': false,
  'progressBar': false,
  'positionClass': 'toast-top-right',
  'preventDuplicates': false,
  'onclick': null,
  'showDuration': '300',
  'hideDuration': '1000',
  'timeOut': '3000',
  'extendedTimeOut': '1000',
  'showEasing': 'swing',
  'hideEasing': 'linear',
  'showMethod': 'fadeIn',
  'hideMethod': 'fadeOut'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  created () {
    toastr.success('init succeeded!')
  },
  router,
  template: '<App/>',
  components: { App }
})
