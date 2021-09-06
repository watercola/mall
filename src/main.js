import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from "components/common/toast";

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()
// 安装toast对象
Vue.use(toast)
// 解决移动300ms延迟
fastclick.attach(document.body)
// 图片懒加载
Vue.use(VueLazyLoad, {
  preload: 1.3,
  loading: require('assets/img/common/placeholder.png'),
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


function Father () {
  this.team = ["letme","mlxg"]
}
function Son () {
  Father.call(this)
}
let son = new Son()
son.team.push("uzi")
console.log(son.team)  // ["letme", "mlxg", "uzi"]
let little_son = new Son()
console.log(little_son.team) // ["letme", "mlxg"]
let father = new Father()
console.log(father.team)
