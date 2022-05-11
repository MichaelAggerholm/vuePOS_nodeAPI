<template>
  <div style="display: flex;">
    <ul>
      <div class="productContainer" style="display: flex;flex-direction: row;flex-wrap: wrap;max-width: 700px;">
        <li v-bind:class="color(prod)"
          v-for="prod in products" 
          :key="prod.productId"
          @click="$emit('add', prod)">
          <div>
            <div>{{ prod.title }}</div>
            <div>{{ prod.price }} Kr,-</div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductsComponent',
  props: [
    'products'
  ],
  data() {
    return{
      
    }
  },
  methods: {
    color(prod) {
      switch (prod.category) {
          case "fruit": return "red";
          case "beverage": return "green";
          case "food": return "blue";
          default: return "";
      }
    }
  }
}
</script>

<style>
  .productContainer li{
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    margin: 5px;
    border: 1px solid lightgray;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  li.red {
  background: #ffa6a6;
  }
  li.green {
    background: #8cdf8c;
  }
  li.blue {
    background: #9d9dec;
  }
</style>
