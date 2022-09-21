<template>
  <nav class="app-bar">
    <div class="left-links">
      <router-link
        to="/"
        class="nav-item">
        Posts
      </router-link>
      <router-link
        to="/about"
        class="nav-item">
        About
      </router-link>
    </div>

    <div class="right-links">
      <a href="#" class="nav-item">Login</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
@import "@/assets/style/global.css";

.app-bar {
  height: 5vh;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--night-blue);
  overflow: hidden;
  display: block;
  justify-content: space-between;
}

.left-links {
  padding-left: 10%;
}

.left-links a {
  float: left;
}

a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.right-links {
  float: right;
}
</style>
