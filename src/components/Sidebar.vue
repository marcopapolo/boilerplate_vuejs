<template>
  <div class="container">
    <router-link to="/" class="logo">
      <img alt="Logo" src="../assets/logo.png">
    </router-link>
    <router-link to="/" class="link">
      <font-awesome-icon icon="home" class="icon" />
      <span>Home</span>
    </router-link>
    <router-link to="/about" class="link">
      <font-awesome-icon icon="question" class="icon" />
      <span>About</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.container {
  background-color: #234361;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
}
.logo {
  margin: 8px auto;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid hsla(0, 0%, 100%, 0);
  transition: border-color 0.12s ease;
}
.link {
  text-align: center;
  padding-bottom: 10px;
  margin-top: 2px;
  margin-bottom: 2px;
  position: relative;
  display: block;
  text-decoration: none;
  overflow: hidden;
  opacity: 0.8;
  color: #fff;
  font-size: 12px;
  transition: all 0.12s ease;
}
.link.router-link-exact-active,
.link:hover {
  opacity: 1;
}
.link.router-link-exact-active {
  background-color: #47b881;
}
.link .icon {
  font-size: 24px;
  margin: 16px 0 8px;
  height: 20px;
}
.link span {
  display: block;
}
img {
  display: inline-block;
  width: 100%;
}
</style>
