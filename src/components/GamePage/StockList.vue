<template>
<div class="stock-list-window">
  <table class="stock-list-wrapper" v-if="store.stocks.length > 0">
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
          :key=x.ticker
          @click="store.setStock(x.ticker)"
          :class="{selected : store.selectedStock === x.ticker}"
          >
          <td>{{x.name}}</td>
          <td>{{x.ticker}}</td>
          <td>{{formatter.format(x.price)}}</td>
          <td>{{formatter.format(x.today_max)}}</td>
          <td>{{formatter.format(x.today_min)}}</td>
        </tr>
    </tbody>
  </table>
  <div class="loading" v-else>
    Loading...
  </div>
  <div class="stock-info-wrapper" v-if="store.stocks.length > 0 && store.selectedStock">
    <StockInfo/>
  </div>


</div>
</template>

<script lang="ts" setup>
import StockInfo from "./StockInfo.vue"
import {useStockStore} from "@/stores/stocks";
const store = useStockStore()
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
store.getStocks()
window.setInterval(store.getStocks, 60000)
</script>

<style scoped lang="scss">
.stock-list-window {
  border-top: 1px solid;
  padding: 1rem;
  height: 25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  .loading {
    font-size: 3rem;
  }
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
      border-top: 2px solid;
      .selected {
        background-color: #00000099;
      }
      tr {
        &:hover {
          cursor: pointer;
          background-color: #00000033;
        }
      }
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