<template>
  <div class="money-counter">
    <span v-if="store.portfolio">{{formatter.format(store.portfolio.money/100)}}</span>
    <span v-else>Loading...</span>
  </div>
</template>

<script lang="ts" setup>
import {useUserStore} from '@/stores/user'
const store = useUserStore()
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
</script>

<style scoped lang="scss">
.money-counter {
  @include box;
  text-align: center;
  span {
    font-size: 4rem;
    text-align: center;
  }
}
</style>