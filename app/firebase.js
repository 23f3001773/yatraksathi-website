import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <--- यह लाइन जरूरी है

const firebaseConfig = {
  apiKey: "AIzaSyCTJS56fdAB5YJ2WwHqswPoq9h72rCNfs0",
  authDomain: "yatra-ksathi-db.firebaseapp.com",
  projectId: "yatra-ksathi-db",
  storageBucket: "yatra-ksathi-db.firebasestorage.app",
  messagingSenderId: "662299801650",
  appId: "1:662299801650:web:7568f9d5059ff0376a242b",
  measurementId: "G-P1R9TT9PTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Database)
const db = getFirestore(app);

// 👇 यह सबसे इम्पोर्टेन्ट लाइन है, इसके बिना एरर आएगा
export { db };