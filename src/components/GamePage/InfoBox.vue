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
      <tr v-for="n in 100">
        <td>row {{ n }}-0</td>
        <td>row {{ n }}-1</td>
        <td>row {{ n }}-2</td>
        <td>row {{ n }}-3</td>
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
    tbody {
      display: block;
      width: 100%;
      overflow: auto;
      height: 49.5rem;
      border-top: 1px solid
    }
    thead {
      background: black;
      color:#fff;
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