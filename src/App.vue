<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Casa</router-link>
      <div v-if="!$auth.loading" class="buttons">
        <button
          v-if="!$auth.isAuthenticated"
          @click="login"
          class="login-button"
        >
          Log in
        </button>
        <button
          v-if="$auth.isAuthenticated"
          @click="logout"
          class="logout-button"
        >
          Log out
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
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

<style>
body{
  margin: 0;
}
#app {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f5f5f5;
  max-height: 100vh;
}

#nav {
  background-color: #34096d;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: row;
}

#nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

#nav a:hover {
  color: #ccc;
}
.buttons {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
}

.login-button,
.logout-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button {
  background-color: #007bff;
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