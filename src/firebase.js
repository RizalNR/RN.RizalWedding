// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Bjfv_DawjSjv4mlE1uvIrSO1_rhWIMw",
  authDomain: "rn-rizalwedding.firebaseapp.com",
  projectId: "rn-rizalwedding",
  storageBucket: "rn-rizalwedding.appspot.com",
  messagingSenderId: "325215941394",
  appId: "1:325215941394:web:71c2b1d34520a5667339cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
