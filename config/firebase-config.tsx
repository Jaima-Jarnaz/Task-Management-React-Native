import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGvMg5_aA5971Hpix5AQJlVm-aXfzp0BY",
  authDomain: "projects-2025-6b8c9.firebaseapp.com",
  projectId: "projects-2025-6b8c9",
  storageBucket: "projects-2025-6b8c9.firebasestorage.app",
  messagingSenderId: "769475607776",
  appId: "1:769475607776:web:e4db36bfa8d303dbbf2485",
  measurementId: "G-CWES79JFZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);

export { auth, db };
