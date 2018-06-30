<template>
  <div class="home">
    <h1 class="display-4 mx-auto text-center">{{ msg }}</h1>
     <vue-particles color="#dedede"></vue-particles>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
