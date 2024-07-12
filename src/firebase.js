// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvW6RTCKpgmJVep2bU3tffBx2NrKN8G9M",
  authDomain: "undangan-rama.firebaseapp.com",
  projectId: "undangan-rama",
  storageBucket: "undangan-rama.appspot.com",
  messagingSenderId: "58524979579",
  appId: "1:58524979579:web:846e8e0ad13b9259bb2dde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
