// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt-TOpgQusXm8o8qw01CZKSKunzLhICoA",
  authDomain: "solocal-47264.firebaseapp.com",
  projectId: "solocal-47264",
  storageBucket: "solocal-47264.appspot.com",
  messagingSenderId: "74635873153",
  appId: "1:74635873153:web:777a426d216b317d68b680",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
