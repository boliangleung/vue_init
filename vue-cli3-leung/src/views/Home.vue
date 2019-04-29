<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>\131</div>
    <div>dada</div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <hello-world></hello-world>
  </div>
</template>

<script>
// @ is an alias to /src
import { HelloWorld } from '@/components/common'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
