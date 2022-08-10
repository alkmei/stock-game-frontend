<template>
  <div class="stock-info">
    <div class="stock-name">{{stockStore.selectedStock}}</div>
    <div class="purchase-info" >
      <span v-if="store.portfolio.stocks.some(e => e.ticker === stockStore.selectedStock)">
        BOUGHT: {{ store.portfolio.stocks.filter(e=>e.ticker === stockStore.selectedStock)[0].bought }}
        SHORTED: {{ store.portfolio.stocks.filter(e=>e.ticker === stockStore.selectedStock)[0].shorted }}
      </span>
      <span v-else>BOUGHT: 0  SHORTED: 0</span>
      <label>Amount: <input type="number" min="0" v-model="amount"></label>
    </div>
    <div class="trans-buttons">
      <button @click="handleClick($event)" id="BUY">BUY</button>
      <button @click="handleClick($event)" id="SELL" :disabled="checkIfAble('bought')">SELL</button>
      <button @click="handleClick($event)" id="SHORT">SHORT</button>
      <button @click="handleClick($event)" id="COVER" :disabled="checkIfAble('shorted')">COVER</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useUserStore} from "@/stores/user";
import {useStockStore} from "@/stores/stocks";
import {ref, watch} from "vue";

const amount = ref("0")
const store = useUserStore()
const stockStore = useStockStore()
function handleClick(event) {
  if (amount.value === "0") return;
  stockStore.createTransaction(event.currentTarget.id, parseInt(amount.value))
}
function checkIfAble(thi) {
  if (store.portfolio.stocks.filter(e=>e.ticker === stockStore.selectedStock).length === 0) return true
  return store.portfolio.stocks.filter(e=>e.ticker === stockStore.selectedStock)[0][thi] === 0
}
</script>

<style scoped lang="scss">
.stock-info {
  .stock-name {
    font-size: 2rem;
  }
  .purchase-info {
    span {
      font-size: 1.5rem;
    }
    label {
      margin-left: 1rem;
      font-size: 1.5rem;
      input {
        @include box;
        color: white;
        font-size: 1.5rem;
        background-color: transparent;
      }
    }
  }
  .trans-buttons {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    height: 11rem;
    button {
      @include box;
      margin: 1rem;
      color: white;
      font-size: 1.5rem;
      border-radius: 0;
      background-color: transparent;
      &:enabled {
        cursor: pointer;
        &:hover {
          background-color: white;
          color: black;
        }
      }
      &:disabled {
        color: #ffffff88;
      }
    }
  }
}
</style>