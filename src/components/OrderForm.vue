<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form id="order_form" @submit="makeAnOrder($event)">

        <label for="requester">De:</label>
        <input type="text" id="requester" name="requester" v-model="requester">

        <label for="grantor">Para:</label>
        <input type="text" id="grantor" name="grantor" v-model="grantor">

        <label for="pedido">Pedido:</label>
        <input type="text" id="description" name="description" v-model="description">

        <label for="order_price">Preço</label>
        <input type="text" id="order_price" name="order_price" v-model="order_price">

        <input type="submit" value="Solicitar transferencia"/>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = process.env.ROOT_API

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
      let resourceUrl = API_URL
      console.log(resourceUrl)
      evt.preventDefault()
      axios.get(resourceUrl).then(response => console.log(response))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
