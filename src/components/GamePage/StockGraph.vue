<template>
  <div class="graph">
    <VueApexCharts width="100%"
                   height="100%"
                   type="line"
                   :options="chartOptions"
                   :series="[{
                     name: store.selectedStock,
                     data: store.prices
                   }]"  v-if="store.selectedStock"/>
    <span v-else>Select Stock</span>
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts"
import {useStockStore} from "@/stores/stocks";

const store = useStockStore()
const chartOptions = {
  chart: {
    id: "stock-graph",
    foreColor: "#fff"
  },
  stroke: {
    width: 1,
  },
  xaxis: {
    tickAmount: 12,
  },
  tooltip: {
    theme: "dark"
  },
};

window.setInterval(() => {
  if (store.selectedStock) {
    store.getStockNow(store.selectedStock)
  }
}, 60000)
</script>

<style scoped>
span {
  font-size: 5rem;
}
</style>