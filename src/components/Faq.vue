<template>
  <div class="faq-container">
    <h1>FAQs</h1>
    <p>Find answers to common questions about our service.</p>
    <ul>
      <li v-for="(qa, index) in faqs" :key="index" class="faq-item">
        <div class="faq-header" @click="toggleDropdown(index)">
          <h3>{{ qa.question }}</h3>
          <span v-if="qa.open">▲</span>
          <span v-else>▼</span>
        </div>
        <div v-show="qa.open" class="faq-dropdown">
          <p>{{ qa.answer }}</p>
        </div>
      </li>
    </ul>
    <div>
      <img
        class="background-image"
        src="../assets/vector/group3.svg"
        alt="Background Image 3"
      />
      <img
        class="background-image"
        src="../assets/vector/group4.svg"
        alt="Background Image 4"
      />
    </div>
  </div>
</template>

<!-- <script>
export default {
  name: "BackgroundImages",
};
</script> -->

<style scoped>
.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure the images stay behind other content */
}
</style>

<script setup lang="ts">
import { ref } from "vue";

const faqs = ref([
  {
    question: "How does it work?",
    answer:
      "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    open: false,
  },
  {
    question:
      "Is it necessary to create an account to use the URLshortening service?",
    answer:
      "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL.When a user clicks on the shortened link, they are redirected to the intended destination.",
    open: false,
  },
  {
    question: "Are the shortened links permanent? Will they expire?",
    answer:
      "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    open: false,
  },
  {
    question: "Are there any limitations on the number of URLs I can shorten?",
    answer:
      "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    open: false,
  },
  {
    question: "Can I track the performance of my shortened URLs?",
    answer:
      "If you have any more questions or concerns, feel free to reach out to us. We are here to help!",
    open: false,
  },
  {
    question:
      "Can I customize the shortened URLs to reflect my brand or content?",
    answer:
      "If you have any more questions or concerns, feel free to reach out to us. We are here to help!",
    open: false,
  },
  {
    question: "Still have any question?",
    answer:
      "If you have any more questions or concerns, feel free to reach out to us. We are here to help!",
    open: false,
  },
]);

const toggleDropdown = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

li {
  list-style: none;
}
.faq-item {
  margin-bottom: 20px;
}

.faq-header {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-top: 1px solid #ddd;
}

.faq-dropdown {
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
}

.faq-dropdown p {
  text-align: left;
}

h1 {
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 30px;
}

/* mobile responsive max-width should be 450px */
@media (max-width: 450px) {
  .faq-header {
    /* flex-direction: column; */
    gap: 10px;
  }
}
</style>
