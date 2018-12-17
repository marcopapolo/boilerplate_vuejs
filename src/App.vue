<template>
  <div id="app">
    <div class="layout">
      <Sidebar class="sidebar" />

      <div class="content">
        <TopBar />

        <div class="routes">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

export default {
  name: "app",
  components: {
    Sidebar,
    TopBar
  }
};
</script>

<style>
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.layout {
  height: 100vh;
  display: flex;
}
.sidebar {
  width: 96px;
}
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.routes {
  flex: 1;
  padding: 40px 16px 80px;
  background-color: #f7f8fa;
}
</style>
