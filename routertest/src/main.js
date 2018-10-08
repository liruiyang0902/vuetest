import Vue from 'vue'
import App from './App.vue'
//引入VUE ROUTER插件
import VueRouter from 'vue-router'
//引入ROUTER具体的配置
import {routes} from './routes'


Vue.use(VueRouter);//与导入的插件命名相同 4

const router = new VueRouter({
  //将配置导入进入router的对象里面,与配置文件中命名的变量名字相同 6
  routes
  // routes:[
  //   {path:'',component:home},
  //   {path:'/user',component:user}
  // ]

});

new Vue({
  el: '#app',
  router,//必须名字为router 11
  render: h => h(App)
})


// import Vue from 'vue'
// import App from './App.vue'
// import VueRouter from 'vue-router'
// import {routes} from './routes'

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes
// });

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })