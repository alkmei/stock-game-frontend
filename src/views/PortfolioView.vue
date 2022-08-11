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
              <td>{{}}</td>
            </tr>
        </tbody>
      </table>
  </div>

</template>

<script lang="ts">
import {useUserStore} from '@/stores/user'
import {useStockStore} from '@/stores/stocks'
import router from '@/router'
export default {

  name: "PortfolioView",

  setup(){
    const userStore = useUserStore()
    const stockStore = useStockStore()
    const homeButton = () => {
      router.push("/")
    }



    return{userStore, stockStore, homeButton}

  }

}
</script>

<style scoped lang="scss">


.container{
  height:100vh;
  font-size:2rem;
  padding: 2rem 2rem 2rem 2rem;
  .welcome-user{
    font-size:2rem;
  }
  .money{
    font-size: 2rem;
  }

  .stock-list-wrapper {
    width: 50%;
    height: 30%;
    table-layout: fixed;
    border: 1px solid;
    border-collapse: collapse;
    display: grid;
    grid-template-rows: 3rem 1fr;
    
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