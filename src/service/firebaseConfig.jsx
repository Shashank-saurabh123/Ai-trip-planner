// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX8VO2GVpjD_53oCWRrQofMiZpH4taX_E",
  authDomain: "ai-trip-planner-d4ad4.firebaseapp.com",
  projectId: "ai-trip-planner-d4ad4",
  storageBucket: "ai-trip-planner-d4ad4.appspot.com",
  messagingSenderId: "496284075093",
  appId: "1:496284075093:web:75d7da60551ae8091540dc",
  measurementId: "G-P98WN60X39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
//const analytics = getAnalytics(app);