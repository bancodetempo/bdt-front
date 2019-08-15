<template>
  <div id="app">
    <OrderForm msg="Bem-vindo(a) ao Banco de Tempo"/>
  </div>
</template>

<script>
import OrderForm from './components/OrderForm.vue'

export default {
  name: 'app',
  components: {
    OrderForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
