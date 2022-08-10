<template>
  <div class="money-counter">$</div>
</template>

<script lang-="ts">
import {useUserStore} from '@/stores/user.ts'
export default {
  name: "MoneyCounter",
  setup(){
    const store = useUserStore()
    return{store}
  }

}
</script>

<style scoped lang="scss">
.money-counter {
  @include box;
  font-size: 4rem;
  text-align: center;
}
</style>