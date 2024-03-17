<template>
    <div class="qr-code-section" v-if="shortenedURL">
      <h2 class="qr-code-header">QR Code for Shortened URL</h2>
      <div class="qr-code">
        <img :src="qrCodeURL" alt="QR Code" />
      </div>
      <button @click="downloadQRCode" class="download-button">
        Download QR Code
      </button>
      <button @click="shareQRCode" class="share-button">Share QR Code</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, defineProps } from "vue";
  
  const qrCodeURL = ref("");
  const { shortenedURL } = defineProps(["shortenedURL"]);
  
  const generateQRCode = async () => {
    const storedURL = localStorage.getItem("shortenedURL");
  
    if (storedURL && storedURL !== "") {
      try {
        const response = await fetch(
          `https://quickchart.io/qr?text=${encodeURIComponent(
            storedURL
          )}&size=150`
        );
  
        if (response.ok) {
          qrCodeURL.value = URL.createObjectURL(await response.blob());
        } else {
          console.error("Failed to generate QR code:", response.statusText);
        }
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }
  };
  
  onMounted(() => {
    generateQRCode();
  });
  
  localStorage.setItem("shortenedURL", shortenedURL.value);
  
  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = qrCodeURL.value;
    link.download = "qr_code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const shareQRCode = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "QR Code for Shortened URL",
          text: "Check out this QR code!",
          url: shortenedURL,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this device/browser.");
    }
  };
  </script>
  
  <style scoped>
  .qr-code-section {
    margin-top: 20px;
  }
  
  .qr-code-header {
    color: #3498db;
  }
  
  .qr-code {
    text-align: center;
  }
  
  .qr-code img {
    max-width: 100%;
    height: auto;
  }
  
  .download-button,
  .share-button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
  }
  
  .share-button {
    margin-left: 10px;
  }
  </style>