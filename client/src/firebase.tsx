import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "tapseva-6c36b.firebaseapp.com",
    projectId: "tapseva-6c36b",
    storageBucket: "tapseva-6c36b.appspot.com",
    messagingSenderId: "967485075890",
    appId: "1:967485075890:web:a58f4f9885203bd55734ab",
    measurementId: "G-FBT6VYRCN5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };