// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-792c7.firebaseapp.com",
  projectId: "mern-blog-792c7",
  storageBucket: "mern-blog-792c7.appspot.com",
  messagingSenderId: "882072757445",
  appId: "1:882072757445:web:4b2ca06794ea65db05bcac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

