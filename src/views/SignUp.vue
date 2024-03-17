<template>
    <form @submit.prevent="signUp">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { auth } from "../firebase"
  import {createUserWithEmailAndPassword} from "firebase/auth"
  import router from '@/router/index'
  
  const email = ref('')
  const password = ref('')
  
  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email.value, password.value)
      console.log(userCredential.user)
      router.push('/home')
    } catch (error) {
      console.error(error.message)
    }
  }
  </script>
  <style>
  /* Resetting default margin and padding for all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styles */
/* body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  color: #333;
} */

/* Form container styles */
.form-container {
  max-width: 400px;
  margin: 100px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Input field styles */
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Button styles */
button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

</style>