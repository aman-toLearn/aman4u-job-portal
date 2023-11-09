// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSh48YRjDzFH_o36hF9Iymv0su5jf7L7I",
  authDomain: "aman4u-job-portal.firebaseapp.com",
  projectId: "aman4u-job-portal",
  storageBucket: "aman4u-job-portal.appspot.com",
  messagingSenderId: "940193654798",
  appId: "1:940193654798:web:36817d9b146ffc0656345f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};