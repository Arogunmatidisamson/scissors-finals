<!-- Analytics.vue -->
<template>
  <div class="analytics">
    <h1 class="header">Analytics</h1>
    <div class="analyticscontent">
      <p>Total links shortened: {{ totalLinksShortened }}</p>
    <div v-for="(count, date) in linksPerDay" :key="date">
      <p>{{ date }}: {{ count }}</p>
    </div>
    </div>
    <button class="homebutton">
      <router-link to="/home">Go back home</router-link>
    </button>
    <div class="group1">
      <img src="../assets/vector/group7.svg" alt="background image" />
    </div>

    <div class="group2">
      <img src="../assets/vector/group2.svg" alt="background image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import router from "../router/index";

const totalLinksShortened = ref(0);
const linksPerDay: Ref<{ [key: string]: number }> = ref({});

// Retrieve data from local storage
onMounted(() => {
  const storedData: { date: string }[] = JSON.parse(
    localStorage.getItem("shortenedURLs") || "[]"
  );

  totalLinksShortened.value = storedData.length;

  storedData.forEach((url) => {
    const date = new Date(url.date).toDateString();
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
  background-color: #1E3448;
  justify-content: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.analyticscontent {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.analyticscontent p{
  font-size: 3rem;
  padding: 10px 10px 60px 10px;
  border: 1px solid #18553c;
  border-radius: 10px;
  background-color: #8998d99d;
}
h1 {
  text-align: center;
  font-size: var(--FS-900);
  line-height: 96px;
  text-align: center;
  font-weight: 900;
  color: #000;
}

p {
  font-size: var(--FS-300);
  /* line-height: 24px; */
  text-align: center;
  /* margin-left: 60px; */
  /* margin-left: 60px; */
  max-width: 648px;
  width: 100%;
  height: 48px;
}

/* Button styles */
.homebutton {
  margin-top: 10%;
  width: 50%;
  padding: 10px;
  background-color: #03031c5f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0a0a0a8b;
}

button a{
  color: white;
}
</style>
