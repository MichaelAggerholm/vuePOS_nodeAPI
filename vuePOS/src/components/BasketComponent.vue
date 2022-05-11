<template>
  <div style="display: flex;">
    <ul>
      <div class="inBasketContainer basket">
        <li v-for="basketProd in ProductsInBasketArray" 
          :key="basketProd.title"
          @click="$emit('remove', basketProd)">
          <div>
            <div>{{ basketProd.title }}</div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BasketComponent',
  props: [
    'ProductsInBasketArray'
  ],
  data() {
    return{

    }
  },
  methods:{

  }
}
</script>

<style>
  .inBasketContainer li{
    background-color: lightgray;
    display: flex;
    flex-flow: column wrap;
    max-width: 700px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    margin-top: 16px;
    margin-left: 16px;
    border: 1px solid gray;
    width: 200px;
    height: 22px;
    background-color: white;
    padding: 5px;
  }
  .basket {
    height: 300px;
    overflow:auto;
    padding: 10px;
  }
</style>
