<!-- <template>
  <div class="profile-container">
    <div class="profile-picture-container">
      <img :src="profileImageUrl" class="profile-picture" alt="Profile Picture">
    </div>
    <h2 v-if="currentUser">Welcome, {{ currentUser.email }}</h2>
    <input type="file" @change="handleFileUpload">
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { auth} from '../firebase'
import { storage, ref as storageRef } from '../firebase';



const currentUser = ref(auth.currentUser)
const profileImageUrl = ref('')

const logout = async () => {
  try {
    await auth.signOut()
    currentUser.value = null
  } catch (error) {
    console.error(error.message)
  }
}

const handleFileUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    try {
      const storageRef = storageRef(storage, `profile_pictures/${currentUser.value.uid}`);
      await uploadBytes(storageRef, file);
      console.log('Profile picture uploaded successfully!');
      // Get the download URL of the uploaded image
      profileImageUrl.value = await getDownloadURL(storageRef);
    } catch (error) {
      console.error('Error uploading profile picture:', error.message)
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.profile-container {
  max-width: 400px;
  margin: 100px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}


.profile-picture-container {
  margin-bottom: 20px;
}


.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}


h2 {
  font-size: 24px;
  margin-bottom: 20px;
}


button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style> -->
<template>
  <div>

  </div>
</template>

<script lang="ts">
  export default {
    
  }
</script>

<style scoped>

</style>