<template>
  <div class="settings-box">
    <button class="logout" @click="logout()">Log Out</button>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";

const router = useRouter()
const store = useUserStore();
const logout = () => {
  try {
    store.signOut();
    router.push("/login")
  } catch (e) {
    alert(e)
  }

}
</script>

<style scoped lang="scss">
.settings-box {
  @include box;
  .logout {
    @include box;
    font-size: 1.3rem;
    background-color: transparent;
    color: white;
    &:hover {
      background-color: white;
      color: black;
    }
  }
}
</style>