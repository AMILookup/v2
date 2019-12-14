<template>
  <div id="app">
    <search/>
    <results/>
    <login/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import { components } from 'aws-amplify-vue';
import results from './components/results.vue';
import search from './components/search.vue';
import login from './components/user/login/login.vue';

export default {
  components: {
    search,
    results,
    login,
    ...components
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
