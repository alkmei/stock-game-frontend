<template>
<div class="stock-list-window">
  <div class="stock-list-wrapper">
    <table class="stock-list" v-if="store.stocks.length > 0">
      <tr>
        <th class="ticker title">Ticker</th>
        <th class="name title">Name</th>
        <th class="price title">Price</th>
        <th class="price title">Top Today</th>
        <th class="price title right">Bottom Today</th>
      </tr>
      <tr class="stock" v-for="stock in store.stocks">
        <th class="ticker">{{ stock.ticker }}</th>
        <th class="name">{{ stock.name }}</th>
        <th class="price">
          ${{ stock.price.toString().split(".")[0] }}.{{stock.price.toString().split(".")[1].padEnd(2, "0")}}
        </th>
        <th class="price">
          ${{ stock.today_max.toString().split(".")[0] }}.{{stock.today_max.toString().split(".")[1].padEnd(2, "0")}}
        </th>
        <th class="price right">
          ${{ stock.today_min.toString().split(".")[0] }}.{{stock.today_min.toString().split(".")[1].padEnd(2, "0")}}
        </th>
      </tr>
    </table>
  </div>
  <div class="stock-display"></div>
</div>
</template>

<script setup>
import {useStockStore} from "@/stores/stocks";
const store = useStockStore()
store.getStocks()
</script>

<style scoped lang="scss">
.stock-list-window {
  border-top: 1px solid;
  padding: 1rem;
  height: 25rem;
}
</style>