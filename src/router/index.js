import Vue from 'vue'
import Router from 'vue-router'
import OrderForm from '@/components/OrderForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrderForm',
      component: OrderForm
    }
  ]
})
