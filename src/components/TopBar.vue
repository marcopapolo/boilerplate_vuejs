<template>
  <div class="container">
    <h1>{{ $route.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "TopBar"
};
</script>

<style scoped>
.container {
  z-index: 9;
  display: flex;
  height: 56px;
  background-color: white;
  padding: 8px 16px;
  box-shadow: rgba(67, 90, 111, 0.42) 0px 0px 1px 0px;
  align-items: center;
}
h1 {
  color: rgb(35, 67, 97);
  line-height: 20px;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
}
</style>
