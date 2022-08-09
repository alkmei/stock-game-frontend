<template>
  <div class="money-counter">$100,000,000,000.00</div>
</template>

<script>
export default {
  name: "MoneyCounter"
}
</script>

<style scoped lang="scss">
.money-counter {
  @include box;
  font-size: 4rem;
  text-align: center;
}
</style>