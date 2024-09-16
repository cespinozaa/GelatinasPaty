// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkJdZz6Z2f_GLbacfADewaUByVq4zDA-0",
  authDomain: "gelatinasmaria-f245f.firebaseapp.com",
  projectId: "gelatinasmaria-f245f",
  storageBucket: "gelatinasmaria-f245f.appspot.com",
  messagingSenderId: "372997368073",
  appId: "1:372997368073:web:9263ecd05b0429cec88bd8",
  measurementId: "G-2MWKDXTT0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);