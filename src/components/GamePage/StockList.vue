<template>
<div class="stock-list-window">
  <ul class="stock-list" v-if="store.stocks.length > 0">
    <li class="stock" v-for="stock in store.getUppercaseNames">
      <span>{{ stock }}</span>
    </li>
  </ul>
</div>
</template>

<script setup>
import {useStockStore} from "@/stores/stocks";
const store = useStockStore()
store.getStocks()

window.setInterval(() => {
  store.getStocks()
}, 60000)
</script>

<style scoped lang="scss">
.stock-list-window {
  border-top: 1px solid;
  padding: 1rem;
  .stock-list {
    @include box;
    height: 100%;
    overflow-y: scroll;
    list-style: none;
  }
}
</style>