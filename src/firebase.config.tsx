// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcNMM2CLBaucI2rGfW8hlycKVBBlczDYA",
  authDomain: "bancolombia-test-f5c9e.firebaseapp.com",
  projectId: "bancolombia-test-f5c9e",
  storageBucket: "bancolombia-test-f5c9e.appspot.com",
  messagingSenderId: "982889446075",
  appId: "1:982889446075:web:6f311068619f4ad01d079e",
  measurementId: "G-PEC76T0JLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);