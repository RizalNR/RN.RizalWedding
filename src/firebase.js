// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHnCG5m2OTezqMNcPd9sMTAQaEYk7LsrE",
  authDomain: "rn-wedding-3e2e5.firebaseapp.com",
  projectId: "rn-wedding-3e2e5",
  storageBucket: "rn-wedding-3e2e5.appspot.com",
  messagingSenderId: "50458303871",
  appId: "1:50458303871:web:3160732de61c595f59ce4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
