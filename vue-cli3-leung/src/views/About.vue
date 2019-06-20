<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{name}}{{num}}</p>
  </div>
</template>
<script>
export default {
  name: 'about',
  props: ['name', 'num'],
  data () {
    return {}
  }
}
</script>
