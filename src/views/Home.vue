<template>
  <div class="home">
    <h1>Login con oauth</h1>
    <div v-if="!$auth.loading" class="buttons">
      <button v-if="!$auth.isAuthenticated" @click="login" class="login-button">Log in</button>
      <button v-if="$auth.isAuthenticated" @click="logout" class="logout-button">Log out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",

  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        logoutParams: {
          returnTo: window.location.origin,
        },
      });
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  font-size: 2.5em;
}

.buttons {
  margin-top: 20px;
}

.login-button, .logout-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button {
  background-color: #007BFF;
}

.login-button:hover {
  background-color: #0056b3;
}

.logout-button {
  background-color: #dc3545;
}

.logout-button:hover {
  background-color: #c82333;
}
</style>