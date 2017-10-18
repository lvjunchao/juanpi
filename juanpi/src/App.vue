<template>
  <div id="app">
    
    <router-view/>
    <app-bottom-nav></app-bottom-nav>
  </div>
</template>

<script>
import AppBottomNav from './components/AppBottomNav'
export default {
  name: 'app',
  components:{
    AppBottomNav
  }
}
</script>

<style  lang='scss'>

@import 'styles/reset.scss'

</style> 
