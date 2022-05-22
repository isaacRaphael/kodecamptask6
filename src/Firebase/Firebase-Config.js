// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk5aUJKq198cOZGGz0KS6p-SyqDEKH4zY",
  authDomain: "kodecampt6.firebaseapp.com",
  projectId: "kodecampt6",
  storageBucket: "kodecampt6.appspot.com",
  messagingSenderId: "88684693176",
  appId: "1:88684693176:web:99426b32ac695b13ad164d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider =new GoogleAuthProvider()



export const auth = getAuth(app)