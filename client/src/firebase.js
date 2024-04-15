// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "linkedin-clone-51d34.firebaseapp.com",
  projectId: "linkedin-clone-51d34",
  storageBucket: "linkedin-clone-51d34.appspot.com",
  messagingSenderId: "723042030169",
  appId: "1:723042030169:web:3f9e84ef25e496e2409748",
  measurementId: "G-D9CY786JJQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

