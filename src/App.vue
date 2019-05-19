<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {getConfig} from '@/request'

export default {
  created() {
    getConfig().then(res => {
      // console.log(res)
      if (res.code === 1) {
        this.$store.commit('setConfig', res.data)
      }
    })
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  height: 100%;
}
.header {
  background: #ffffff;
}
</style>
