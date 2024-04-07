// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEBrtDwIa2pTpFVA8alv5vXS_HpaJWAh4",
  authDomain: "task-management-system-bfe36.firebaseapp.com",
  projectId: "task-management-system-bfe36",
  storageBucket: "task-management-system-bfe36.appspot.com",
  messagingSenderId: "79420900252",
  appId: "1:79420900252:web:e8c7229dee1070b1e0be59",
  measurementId: "G-N0RDMJRXR2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);