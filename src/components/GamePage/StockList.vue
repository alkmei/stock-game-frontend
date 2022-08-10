<template>
<div class="stock-list-window">
  <div class="stock-list-wrapper">
    <div class="top-header">
      <div class="top-header-row">
        <span>Name</span>
        <span>Ticker</span>
        <span>Price</span>
        <span>Highest Today</span>
        <span>Lowest Today</span>
      </div>
    </div>
  </div>
  <div class="stock-info-wrapper"></div>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  .stock-list-wrapper {
    @include box;
    display: table;
    .top-row {
      display: table-header-group;
      .top-header-row {
        display: table-row;
        span {
          display: table-cell;
        }
      }
    }
  }
  .stock-info-wrapper {
    @include box
  }
}
</style>