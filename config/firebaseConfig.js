import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsExl0M4UncO2Sqw6DzbRf9puOVxvfTsE",
  authDomain: "yatra-76026.firebaseapp.com",
  projectId: "yatra-76026",
  storageBucket: "yatra-76026.firebasestorage.app",
  messagingSenderId: "687100385789",
  appId: "1:687100385789:web:e4ea2c7709c42860df6194",
  measurementId: "G-20NNE8G33P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);  // ✅ this creates a Firestore instance
