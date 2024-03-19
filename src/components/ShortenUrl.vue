<template>
  <div class="container">
    <h1 class="header">Shorten Your Long URL Here</h1>
    <p class="para">
      Enter your long URL here to create a short link and generate QR code.
    </p>
    <p class="para">
      Example:
      http://www.linksift.io/generate-qr-code=and-customize-your-link-effortlessly
    </p>
    <form @submit.prevent="shortenURL" class="form">
      <input
        type="text"
        v-model="originalURL"
        placeholder="Enter URL"
        class="url-input"
      />
      <button type="submit" class="shorten-button">Shorten</button>
      <img src="../assets/vector/magic-wand.svg" alt="magic wand" />
    </form>
    <p v-if="shortenedURL" class="pif">
      Shortened URL:
      <a :href="shortenedURL" target="_blank">{{ shortenedURL }}</a>
      <button @click="copyToClipboard" class="copy-button">
        {{ copyButtonText }}
      </button>
    </p>

    <QRCode :shortenedURL="shortenedURL" @downloadQRCode="downloadQRCode" class="qrcode" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import QRCode from "./QRCode.vue";

const originalURL = ref("");
const shortenedURL = ref("");
const errorMessage = ref("");
const copyButtonText = ref("Copy");

const shortenURL = async () => {
  try {
    const response = await axios.get(
      `https://tinyurl.com/api-create.php?url=${originalURL.value}`
    );
    shortenedURL.value = response.data;
    errorMessage.value = "";

    const storedData = JSON.parse(
      localStorage.getItem("shortenedURLs") || "[]"
    ) as string[];

    storedData.push(shortenedURL.value);
    localStorage.setItem("shortenedURLs", JSON.stringify(storedData));
  } catch (error) {
    console.error("Error shortening URL:", error);
    errorMessage.value = "An error occurred. Please try again later.";
  }
};

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(shortenedURL.value)
    .then(() => {
      copyButtonText.value = "Copied!";

      setTimeout(() => {
        copyButtonText.value = "Copy";
      }, 2000);
    })
    .catch((error) => {
      console.error("Copy failed:", error);
      errorMessage.value = "Copy failed. Please try again.";
    });
};

const downloadQRCode = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "qr_code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 900px;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* height: 70vh; */
  margin: 0% auto;
  margin-top: 25%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  color: #3498db;
  text-align: center;
}

.para {
  text-align: center;
  margin-left: 12%;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  margin-left: 23%;
  margin-top: -10%;
  
}

.pif {
  margin-top: -15%;
  margin-left: 13%;
}

.url-input {
  /* flex-grow: 1; */
  width: 50%;
  padding: 10px;
  border: 1px solid #3498db;
  border-radius: 4px;
  font-size: 16px;
  color: #3498db;
}

.shorten-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.url-result {
  /* margin: 10px 0; */
  color: #2ecc71;
}

.url-result a {
  color: #e74c3c;
  text-decoration: none;
  font-weight: bold;
}

.error-message {
  color: #e74c3c;
}

.history {
  margin-top: 20px;
}

.history-header {
  color: #3498db;
}

.history-list {
  list-style-type: none;
  padding: 0;
}

.history-item {
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
}

.clear-history-button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.copy-button {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
}
.delete-button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 5px;
}

.display-qr-button,
.download-qr-button,
.copy-button {
  margin-top: 5px;
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
</style>
