<template>
    <div class="login">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button @click.prevent="login">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        // Lakukan proses login sesuai dengan kebutuhan Anda
        // Contoh: validasi username dan password, panggil API, dll.
        console.log("Login:", this.username, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .form-group {
    margin-bottom: 10px;
  }
  label {
    display: block;
    font-weight: bold;
  }
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 5px;
    font-size: 16px;
  }
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  