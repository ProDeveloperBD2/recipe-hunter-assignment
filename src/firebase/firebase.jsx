// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSl7oyotiB7i2nLATftAE44_e4BdI-GYc",
  authDomain: "recipe-hunter-assignment.firebaseapp.com",
  projectId: "recipe-hunter-assignment",
  storageBucket: "recipe-hunter-assignment.appspot.com",
  messagingSenderId: "470970997969",
  appId: "1:470970997969:web:f96c8613ec611d8b23b9f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
