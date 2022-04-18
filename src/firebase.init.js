// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7uDC3mkYXll8olYUTiJWnlfazVV9R3VE",
  authDomain: "guide-for-outings.firebaseapp.com",
  projectId: "guide-for-outings",
  storageBucket: "guide-for-outings.appspot.com",
  messagingSenderId: "588946490265",
  appId: "1:588946490265:web:6c32c6feff4d9976c54908"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;