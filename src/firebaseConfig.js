// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAzvS_d45ST38nqotnwk-lsC0bBcKVprvI",
    authDomain: "sawcorps-368be.firebaseapp.com",
    projectId: "sawcorps-368be",
    storageBucket: "sawcorps-368be.firebasestorage.app",
    messagingSenderId: "282017232189",
    appId: "1:282017232189:web:4cdfb169b3809f43098154",
    measurementId: "G-CRL6N9LBDT"
  };

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
console.log("Firebase app initialized: ", app);
const auth = getAuth(app);

// Export auth
export { auth };
