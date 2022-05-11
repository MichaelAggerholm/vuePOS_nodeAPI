<template>
  <p>Total: {{itemsTotal}} Kr,-</p>
</template>

<script>
export default {
  name: 'PriceComponent',
  props: [
    'ProductsInBasketArray'
  ],
  data() {
    return{

    }
  },
  methods:{
    
  },
  // https://v3.vuejs.org/guide/computed.html#computed-properties
  // viser summen af all produkt priser der er i array af objekter.
  computed: {
    itemsTotal() {
      return this.ProductsInBasketArray.reduce((a, c) => a + c.price, 0)
    }
  }
}
</script>

<style>
  p {
    font-weight: 600;
  }
</style>
