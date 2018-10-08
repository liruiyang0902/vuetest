import Vue from 'vue'
import router from 'vue-router'
//导入USER.VUE这个模块儿
import user from './components/User.vue'
//导入HOME.VUE首页
import home from './Home.vue'
//用来配置具体VUE-ROUTER链接

export const routes = [
  {path:'',component:home},
  {path:'/user',component:user}
];