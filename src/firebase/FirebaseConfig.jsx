// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjO7FRo1IEj3VI5RFSU8xMRjneeEpKn54",
  authDomain: "myecom-a36b2.firebaseapp.com",
  projectId: "myecom-a36b2",
  storageBucket: "myecom-a36b2.firebasestorage.app",
  messagingSenderId: "871168094844",
  appId: "1:871168094844:web:6df07f378f4dfed6958ff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }