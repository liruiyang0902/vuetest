<template>
  <div id="app">
    <div class="container">
      <div class="row">
            <h1>Routing</h1>
            <app-switcher></app-switcher>
            <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import switcher from './Switcher.vue'
export default {
  name: 'app',
  components:{
    appSwitcher:switcher
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="css">

</style>
