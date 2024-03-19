<template>
  <div class="login">
    <div class="loginform">
      <form @submit.prevent="login">
        <h1>LOGIN</h1>
        <input type="email" v-model="email" placeholder="Email" required />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <router-link to="/signup">don't have an account, sign up</router-link>

        <div class="group1">
            <img src="../assets/vector/group7.svg" alt="background image" />
          </div>

        <div class="group2">
            <img src="../assets/vector/group2.svg" alt="background image" />
          </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import router from "../router/index";

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = async () => {
  errorMessage.value = "";

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log(userCredential.user);
    router.push("/home");
  } catch (error) {
    console.error("error", (error as Error).message || error);

    errorMessage.value = "invalid email or password";
  }
};
</script>
<style>
.login {
  background-color: #253646;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.loginform {
  margin: 0% auto;
  padding-top: 10%;
  padding-left: 32%;
  align-items: center;
  justify-content: center;
  text-align: center;
}

input[type="email"],
input[type="password"] {
  width: 80%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Button styles */
button[type="submit"] {
  width: 80%;
  padding: 10px;
  background-color: #253646;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style> -->
