<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="view">
    <RouterView/>
  </div>
</template>

<style scoped lang="scss">
.view:before {
  content: "";
  height: 100%;
  width:100%;
  position: fixed;
  z-index: -1;
  left: 0;
  right: 0;
  background: url("./assets/nick-chong-N__BnvQ_w18-unsplash.jpg");
  background-size: cover;
  filter: brightness(50%);
}
</style>
