import { storeToRefs } from 'pinia'
import { storeToRefs } from 'pinia'
<template>
  <div class="container">
    <button @click="homeButton()">Home</button>
    <div class="welcome-user">Welcome to your portfolio, {{userStore.portfolio.username}}!</div>
    <div class="money">
      Buying Power: ${{userStore.portfolio.money / 100}}
    </div>
      <table class="stock-list-wrapper">
        <thead class="top-header">
          <tr class="top-header-row">
            <th>Ticker</th>
            <th>Bought</th>
            <th>Shorted</th>
            <th>Equity</th>
          </tr>
        </thead>
          <tbody class="stock-list">
            <tr v-for="(x) in userStore.portfolio.stocks" >
              <td>{{x.ticker}}</td>
              <td>{{x.bought}}</td>
              <td>{{x.shorted}}</td>
            </tr>
        </tbody>
      </table>

      <table class="stock-list-wrapper">
        <thead class="top-header">
          <tr class="top-header-row">
            <th>Ticker</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Time</th>
          </tr>
        </thead>
          <tbody class="stock-list">
            <tr v-for="(x) in stockStore.transactions" >
              <td>{{x.ticker}}</td>
              <td>{{x.type}}</td>
              <td>{{x.amount}}</td>
              <td>${{x.trans_price/100}}</td>
              <td>
                {{new Date(x.created_at).getMonth()}}/{{new Date(x.created_at).getDate()}}/{{new Date(x.created_at).getFullYear()}}
                {{new Date(x.created_at).getHours()}}:{{new Date(x.created_at).getMinutes().toString().padStart(2, "0")}}
              </td>
            </tr>
        </tbody>
      </table>
  </div>
</template>

<script lang="ts" setup>
import {useUserStore} from '@/stores/user'
import {useStockStore} from '@/stores/stocks'
import router from '@/router'
const userStore = useUserStore()
const stockStore = useStockStore()
stockStore.getTransactions()
const homeButton = () => {
  router.push("/")
}
</script>

<style scoped lang="scss">
.container{
  height:100vh;
  font-size:2rem;
  padding: 2rem 2rem 2rem 2rem;
  button {
    @include box;
    background-color: transparent;
    color: white;
    font-size: 1.5rem;
    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
  .welcome-user{
    font-size:2rem;
  }
  .money{
    font-size: 2rem;
  }
  .stock-list-wrapper {
    width: 70%;
    height: 30%;
    table-layout: fixed;
    border: 1px solid;
    border-collapse: collapse;
    display: grid;
    grid-template-rows: 3rem 1fr;
    margin-bottom: 4rem;
    tbody {
      width: 100%;
      overflow-y: scroll;
      border-top: 2px solid;
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
      font-size: 2rem;
    }
  }
}
</style>