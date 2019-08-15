<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form id="order_form">

        <label for="requester">De:</label>
        <input type="text" id="requester" name="requester" v-model="requester">

        <label for="grantor">Para:</label>
        <input type="text" id="grantor" name="grantor" v-model="grantor">

        <label for="pedido">Pedido:</label>
        <input type="text" id="description" name="description" v-model="description">

        <label for="order_price">Preço</label>
        <input type="text" id="order_price" name="order_price" v-model="order_price">

        <button v-on:click="makeAnOrder($event)">Solicitar transferência</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'OrderForm',
  data: () => {
    return {
      requester: '',
      grantor: '',
      description: '',
      order_price: 0
    }
  },
  props: {
    msg: String
  },
  methods: {
    makeAnOrder: function (evt) {
      evt.preventDefault()
      console.log(this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
