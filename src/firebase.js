// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy48sJl4jO39FBoO0-8Y2aYCCRkPrdYwU",
  authDomain: "delivery-app-96014.firebaseapp.com",
  projectId: "delivery-app-96014",
  storageBucket: "delivery-app-96014.appspot.com",
  messagingSenderId: "154502732136",
  appId: "1:154502732136:web:15d1b70f5db314f9425edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;