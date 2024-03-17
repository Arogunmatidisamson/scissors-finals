// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// import { getStorage } from 'firebase/storage';
import { getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdXcu2UuL3CNVhhwa0HWSLWSvy2VgjWtw",
  authDomain: "final-scissors.firebaseapp.com",
  projectId: "final-scissors",
  storageBucket: "final-scissors.appspot.com",
  messagingSenderId: "57938130438",
  appId: "1:57938130438:web:2cb7d089814df930d77587",
  measurementId: "G-5MQDWFVXG2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
// export const storage = getStorage();
export const storage = getStorage(); // Pass the app instance to getStorage

// Export storageRef directly
// export { storageRef };
