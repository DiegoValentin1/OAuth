<template>
  <div class="home">
    <h1 v-if="!$auth.isAuthenticated">Primero inicia sesión</h1>
    <div v-else class="profile-container">
      <img :src="user.picture" alt="User Picture" class="profile-picture" />
      <h2 class="profile-name">{{ user.name }}</h2>
      <p class="profile-email">{{ user.email }}</p>
      <p class="profile-nickname">{{ user.nickname }}</p>
      <p class="profile-locale">{{ user.locale }}</p>
      <p class="profile-updated">{{ user.updated_at }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.user = this.$auth.user;
  },
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
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-name {
  color: #333;
  font-size: 2em;
  margin-top: 20px;
}

.profile-email, .profile-nickname, .profile-locale, .profile-updated {
  color: #666;
  font-size: 1em;
  margin-top: 10px;
}
</style>