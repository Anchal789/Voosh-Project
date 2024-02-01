// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPQPwT6KTlwxqoiTqcHIbTZ3WvAVyGzpc",
  authDomain: "voosh-project-10e46.firebaseapp.com",
  projectId: "voosh-project-10e46",
  storageBucket: "voosh-project-10e46.appspot.com",
  messagingSenderId: "268951545953",
  appId: "1:268951545953:web:97e827347a611c8c252220",
  measurementId: "G-9VKBFKTEG4",
  databaseURL : "https://voosh-project-10e46-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);