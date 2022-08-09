<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";
import {ref} from "vue";
import SignupForm from "@/components/SignupForm.vue";
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router/dist/vue-router";
const picked = ref("login")
const router = useRouter()

if (useUserStore().user && useUserStore().session) {
  router.push("/")
}
</script>

<template>
  <div class="wrapper-wrapper">
    <div class="form-wrapper">
      <input type="radio" name="acc-choice" id="login" value="login" v-model="picked">
      <label for="login">Log In</label>
      <input type="radio" name="acc-choice" id="signup" value="signup" v-model="picked">
      <label for="signup">Sign Up</label>

      <LoginForm v-if="picked === 'login'"/>
      <SignupForm v-else/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-wrapper {
  height: 100vh;
  transform: translateY(25vh);
  .form-wrapper {
    width: 80%;
    margin: auto;
    height: fit-content;
    align-self: center;
    padding: 1rem;
    input[type="radio"] {
      visibility: hidden;
      label {
        cursor: pointer;
      }
      &:checked + label {
        color: white;
      }
    }
    label {
      font-size: 2rem;
      margin-right: 1rem;
      color: #4f4f4f;
    }
    h3 {
      font-size: 2rem;
    }
  }
}
</style>