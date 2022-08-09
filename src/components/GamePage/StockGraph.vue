<template>
  <div class="graph">
    <VueApexCharts width="100%"
                   height="100%"
                   type="line"
                   :options="chartOptions"
                   :series="[{
                     name: store.selectedStock,
                     data: store.prices
                   }]"/>
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
store.getPrices("PAPR")

window.setInterval(() => {
  store.getPrices("PAPR")
}, 60000)
</script>

<style scoped>

</style>