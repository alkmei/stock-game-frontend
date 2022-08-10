<script setup lang="ts">
import MoneyCounter from "@/components/GamePage/MoneyCounter.vue";
import InfoBox from "@/components/GamePage/InfoBox.vue";
import SettingsBox from "@/components/GamePage/SettingsBox.vue";
import StockGraph from "@/components/GamePage/StockGraph.vue";
import StockList from "@/components/GamePage/StockList.vue";
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";
const router = useRouter()

if (!useUserStore().user && !useUserStore().session) {
  router.push("/login")
}
</script>

<template>
  <main>
    <div class="left">
      <MoneyCounter/>
      <InfoBox/>
      <SettingsBox/>
    </div>
    <div class="right">
      <div class="stock-window">
        <StockGraph/>
        <StockList/>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  padding: 1rem;
  gap: 1rem;
  .left {
    display: grid;
    height: 100%;
    grid-template-rows: 0fr 1fr 0fr;
    gap: 1rem;
  }
  .stock-window {
    @include box;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 0.4fr;
  }
}
</style>