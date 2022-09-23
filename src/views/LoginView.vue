<template>
  <div class="login-form">
    <form>
      <div class="form-control">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username">
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password">
      </div>

      <div class="form-control">
        <input
          type="submit"
          value="Login"
          v-on:click.prevent="login">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: async function () {
      await this.$store.dispatch('authStore/login', {
        username: this.username,
        password: this.password
      })

      this.$router.push({ name: 'Home' })
    }
  },
  name: 'LoginView'
}
</script>

<style scoped>
.login-form {
  width: 300px;
  display: flex;
  flex-direction: column;

  margin: 50px auto;
  padding: 15px;
  border: 1px solid var(--night-blue);
  border-radius: 5px;
}

.form-control {
  display: flex;
  flex-direction: column;
  margin: 5px 0 10px 0;
}

.form-control label {
  font-weight: bold;
}
</style>
