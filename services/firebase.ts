// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEnq4Z5SC3F_1sX2uKkoBL149J43GRo0s",
  authDomain: "spacehsantos.firebaseapp.com",
  projectId: "spacehsantos",
  storageBucket: "spacehsantos.appspot.com",
  messagingSenderId: "952988476461",
  appId: "1:952988476461:web:811b7a53ad05ce567a84a4",
  measurementId: "G-9PRVBGY7JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);