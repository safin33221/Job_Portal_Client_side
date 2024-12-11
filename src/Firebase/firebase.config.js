// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWZY76Gt4M4ZFShd0OhiYMg3Z2-9RFEs8",
    authDomain: "job-portal-5bfa4.firebaseapp.com",
    projectId: "job-portal-5bfa4",
    storageBucket: "job-portal-5bfa4.firebasestorage.app",
    messagingSenderId: "415825357279",
    appId: "1:415825357279:web:eee098a89cdad8c527fc6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)