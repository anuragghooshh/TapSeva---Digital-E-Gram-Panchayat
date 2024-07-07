// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGW9aSvu824gLd_RHiBowZqc0hTb-k5qo",
  authDomain: "tapseva-6c36b.firebaseapp.com",
  projectId: "tapseva-6c36b",
  storageBucket: "tapseva-6c36b.appspot.com",
  messagingSenderId: "967485075890",
  appId: "1:967485075890:web:a58f4f9885203bd55734ab",
  measurementId: "G-FBT6VYRCN5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
