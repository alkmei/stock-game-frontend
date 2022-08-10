<template>
<div class="stock-list-window">
  <table class="stock-list-wrapper">
    <thead class="top-header">
      <tr class="top-header-row">
        <th>Name</th>
        <th>Ticker</th>
        <th>Price</th>
        <th>High</th>
        <th>Low</th>
      </tr>
    </thead>
      <tbody class="stock-list">
        <tr
          v-for="(x) in store.stocks" 
          :key=store.stocks.ticker 
          >
          <td>{{x.name}}</td>
          <td>{{x.ticker}}</td>
          <td>{{x.price}}</td>
          <td>{{x.today_max}}</td> 
          <td>{{x.today_min}}</td>
        </tr>
    </tbody>
  </table>

  <div class="stock-info-wrapper" >
      
  </div>
</div>
</template>

<script lang="ts" setup>
import {useStockStore} from "@/stores/stocks";
const store = useStockStore()
store.getStocks()
</script>

<style scoped lang="scss">
.stock-list-window {
  border-top: 1px solid;
  padding: 1rem;
  height: 25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  .stock-list-wrapper {
    width: 100%;
    height: 100%;
    table-layout: fixed;
    border: 1px solid;
    border-collapse: collapse;
    display: grid;
    grid-template-rows: 3rem 1fr;
    tbody {
      width: 100%;
      overflow-y: scroll;
      height: 19.5rem;
      border-top: 1px solid;
    }
    thead {
      tr {
        display: block;
      }
    }
    th, td {
      padding: 5px;
      text-align: center;
      width: 20rem;
      font-size: 1.5rem;
    }
  }
}

.stock-info-wrapper {
  @include box
}

</style>