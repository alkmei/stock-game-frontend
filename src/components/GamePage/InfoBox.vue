<template>
  <div class="info-box">
    <table class="fixed_header">
      <thead>
      <tr>
        <th>Ranking</th>
        <th>ID</th>
        <th>Name</th>
        <th>Money</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="n in 5">
        <td>{{ n }}</td>
        <td>{{ n }}</td>
        <td>{{ n }}</td>
        <td>{{ n }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.info-box {
  height: 100%;
  border: 1px solid;
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