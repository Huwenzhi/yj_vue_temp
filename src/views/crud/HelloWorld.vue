<template>
  <div class="hello">
    <button @click="add(1234)">点击时间</button>
  </div>
</template>

<script>
import myVue from './functions.js'
export default {
  name: 'HelloWorld',
  mixins: [myVue.Sm]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
