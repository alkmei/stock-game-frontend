<template>
  <form @submit.prevent="handleSubmit" class="block-container">
    <div class="block-body">
      <dl class="form-row">
        <dt>
          <div class="label-wrapper">
            <label for="username">Email: </label>
          </div>
        </dt>
        <dd>
          <input class="input" type="email" name="email" v-model="email" required />
        </dd>
      </dl>
      <dl class="form-row">
        <dt>
          <div class="label-wrapper">
            <label for="password">Password: </label>
          </div>
        </dt>
        <dd>
          <input class="input" type="password" name="password" v-model="password" required />
        </dd>
      </dl>
    </div>
    <dl class="form-row form-submit-row">
      <dd>
        <div class="form-submit-row-main">
          <div class="form-submit-row-controls">
            <button class="button"><span class="button-text">LOG IN</span></button>
            <div v-if="error">{{ error }}</div>
          </div>
        </div>
      </dd>
    </dl>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const email = ref("")
const password = ref("")
const error = ref(null)
const router = useRouter()
const store = useUserStore()
const handleSubmit = async () => {
  try {
    await store.signIn(email.value, password.value)
    await router.push("/")
  } catch (err: any) {
    error.value = err.message
  }
}
</script>

<style scoped lang="scss">
.block-container {
  border: 1px solid;
  padding: 1rem 1rem 0;
  .block-body {
    .form-row {
      display: table;
      table-layout: fixed;
      width: 100%;
      margin: 0;
      position: relative;
      .label-wrapper {
        transform: translateY(7px);
        label {
          font-size: 1.5rem;
        }
      }
      dt {
        border-right: 1px solid;
        text-align: right;
        width: 33%;
        padding: 15px 10px 15px 10px;
      }
      dd {
        width: 67%;
        padding: 15px 10px 15px 10px;
      }
      dd, dt {
        display: table-cell;
        vertical-align: top;
      }
      .input {
        color: white;
        background-color: transparent;
        border: 1px solid;
        padding: 0.8rem;
        display: block;
        width: 100%;
        line-height: 1.3;
        text-align: left;
        word-wrap: break-word;
        font-family: monospace;
        font-size: 1.5rem;
      }
    }
  }
  .form-submit-row {
    position: relative;
    dd {
      border-top: 1px solid;
    }
    .form-submit-row-main {
      position: relative;
      .form-submit-row-controls {
        position: relative;
        padding-left: 33%;
        padding-top: 8px;
        padding-bottom: 8px;
        margin-left: 10px;
        margin-right: 10px;
        .button {
          color: white;
          border: 1px solid;
          background-color: transparent;
          cursor: pointer;
          text-decoration: none;
          justify-content: center;
          align-items: center;
          display: inline-flex;
          padding: 8px 10px;
          text-align: center;
          .button-text {
            font-size: 1.3rem;
          }
          &:hover {
            background-color: white;
            color: black;
          }
        }
      }
    }
  }
}
</style>