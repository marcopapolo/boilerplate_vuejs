<template>
  <div class="container">
    <div class="header">
      <h2>Solutions</h2>
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Sources</th>
          </tr>
        </thead>
        <tr>
          <td>
            Akita
          </td>
          <td>
            Enabled
          </td>
          <td>
            Yop
          </td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: "List"
};
</script>

<style scoped>
.container {
  box-shadow: rgba(67, 90, 111, 0.416) 0px 0px 1px,
    rgba(67, 90, 111, 0.3) 0px 5px 8px -4px;
  overflow: hidden;
  border-radius: 4px;
  margin: 0px 0px 32px;
}
.header {
  color: rgb(67, 90, 111);
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid;
  border-color: rgb(213, 222, 230);
}
h2 {
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.05px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  color: #1f4160;
  margin: 0;
}
.table {
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color: grey;
}
table {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
}
thead {
  box-shadow: inset 0 -1px rgba(67, 90, 111, 0.079);
  background-color: #f7f8fa;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
th {
  padding: 0px 16px;
  width: 400px;
  text-align: left;
  position: relative;
  box-sizing: content-box;
  height: 40px;
}
table > tr {
  background: #fff;
  border-bottom: 1px solid rgba(67, 90, 111, 0.079);
}
table > tr > td {
  padding: 8px 16px;
  width: 400px;
  text-align: left;
  box-sizing: content-box;
}
</style>
