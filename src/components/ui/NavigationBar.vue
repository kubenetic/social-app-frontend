<template>
  <nav class="app-bar">
    <div v-if="currentUser && currentUser.id">
      <div class="left-links">
        <router-link
          to="/"
          class="nav-item">
          Posts
        </router-link>
        <router-link
          v-bind:to="userPageLink"
          class="nav-item">
          Profile
        </router-link>
      </div>

      <div class="right-links">
        <a href="#" class="nav-item">Logout</a>
      </div>
    </div>

    <div v-else>
      <div class="right-links">
        <a href="#" class="nav-item">Login</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    currentUser: function () {
      return this.$store.getters['authStore/currentUser']
    },
    userPageLink: function () {
      return `/user/${this.currentUser.id}`
    }
  },
  name: 'NavigationBar'
}
</script>

<style scoped>
@import "@/assets/style/global.css";

.app-bar {
  height: 5vh;
  width: 100%;
  background-color: var(--night-blue);
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
