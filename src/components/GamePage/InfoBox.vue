<template>
  <div class="info-box">
    <table class="fixed_header" v-if="ready">
      <thead>
      <tr>
        <th>Ranking</th>
        <th>Name</th>
        <th>Money</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="n in data">
        <td>{{ n.id }}</td>
        <td>{{ n.username }}</td>
        <td>{{ formatter.format(n.money) }}</td>
      </tr>
      </tbody>
    </table>
    <span class="loading" v-else>Loading...</span>
  </div>
</template>

<script setup lang="ts">
import axios from "axios"
import {ref} from "vue";

const ready = ref(false)
const data = ref([])
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

interface dataValue {
  username: string,
  money: number
}

async function setup() {
  await axios.get(`${import.meta.env.VITE_BACKEND_URL}/portfolios/leaderboard`).then((res) => {
    data.value = res.data.map((x: dataValue, index: number) => {
      return {
        id: index + 1,
        ...x
      }
    })
    ready.value = true
  })
}

setup()
</script>

<style scoped lang="scss">
.info-box {
  height: 100%;
  border: 1px solid;
  display: flex;
  justify-content: center;
  .loading {
    font-size: 3rem;
  }
  .fixed_header {
    width: 100%;
    height: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    display: grid;
    grid-template-rows: 3rem 1fr;
    tbody {
      width: 100%;
      height: 60rem;
      overflow-y: auto;
      border-top: 1px solid;
    }
    thead {
      tr {
        display: block;
      }
    }
    th, td {
      padding: 5px;
      text-align: center;
      width: 20rem;
      font-size: 1.5rem;
    }
  }
}
</style>