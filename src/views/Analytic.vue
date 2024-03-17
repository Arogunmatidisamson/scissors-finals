<!-- Analytics.vue -->
<template>
    <div class="analytics">
      <h1 class="header">Analytics</h1>
      <p>Total links shortened: {{ totalLinksShortened }}</p>
      <div v-for="(count, date) in linksPerDay" :key="date">
        <p>{{ date }}: {{ count }}</p>
      </div>
<button>
    <router-link to="/home">Go back home</router-link>
</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import router from "../router/index.ts"
  
  const totalLinksShortened = ref(0);
  const linksPerDay = ref({});
  
  // Retrieve data from local storage
  onMounted(() => {
    const storedData = JSON.parse(localStorage.getItem("shortenedURLs")) || [];
    totalLinksShortened.value = storedData.length;
    
    storedData.forEach(url => {
      const date = new Date(url.date).toDateString(); // Assuming each shortened URL has a 'date' property
      if (!linksPerDay.value[date]) {
        linksPerDay.value[date] = 0;
      }
      linksPerDay.value[date]++;
    });
  });
  </script>
  
  <style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.analytics {
  font-family: Arial, sans-serif;
  color: #333;
  /* background-color: #98c8db; */
}

h1 {
  text-align: center;
}

  </style>
  