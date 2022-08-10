<template>
  <div class="settings-box">
    <button class="logout" @click="logout()">Log Out</button>
    <span class="username" v-if="store.portfolio">Logged in as: {{store.user?.user_metadata.username}}</span>
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
  .username {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
}
</style>