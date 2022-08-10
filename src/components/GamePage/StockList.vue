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

<script lang="ts">
import {useStockStore} from "@/stores/stocks";
export default{
  setup(){ 
    const store = useStockStore()
    store.getStocks()

    return{store}
  }
}

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
    .top-header {
      display: table-header-group;
      .top-header-row {
        display: flex;
        justify-content: space-evenly;
        
        th {
          text-decoration: underline 1px;
          text-underline-offset: 1px;
          font-size:1.5rem;
        }
      }
    }
    .stock-list{
      padding-top:1rem;
      tr{
        td{
          font-size: 1.5rem;
          text-transform: capitalize;
        }
      }

    }
    .stock-info{
      display:flex;
      flex-direction:row;
      font-size:1.5rem;
      align-items: center;
      .stock-element{
        padding-left: 1rem;
      }
    }

  }
  
  .stock-info-wrapper {
    @include box;


  
  }
  
}



</style>