<template>
  <div class="settings-box">
    <button class="button" @click="logout()">Log Out</button>
    <button class="button" @click="portButton()">Portfolio</button>
    <span class="username" v-if="store.portfolio">Logged in as: {{store.portfolio.username}}</span>
    <span class="username" v-else>Loading...</span>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";

const router = useRouter()
const store = useUserStore();
const logout = async () => {
  try {
    await store.signOut();
    await router.push("/login")
  } catch (e) {
    alert(e)
  }
}
const portButton = () => {
  router.push("/portfolio")
}
</script>

<style scoped lang="scss">
.settings-box {
  @include box;
  .button {
    @include box;
    font-size: 1.3rem;
    background-color: transparent;
    color: white;
    margin-right: 1rem;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  .username {
    font-size: 1.5rem;
  }
}
</style>