// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuWypy14uFSKsuCaElLkECM6zIwLHa1QU",
    authDomain: "photofolio-fdf27.firebaseapp.com",
    projectId: "photofolio-fdf27",
    storageBucket: "photofolio-fdf27.appspot.com",
    messagingSenderId: "9022179845",
    appId: "1:9022179845:web:0e0285e13ac4c459982a6c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);