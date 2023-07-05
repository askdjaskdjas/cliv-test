// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbErQggQqaWRxWrne0crcrc_dfQVKW9ic",
  authDomain: "chat-entityai.firebaseapp.com",
  projectId: "chat-entityai",
  storageBucket: "chat-entityai.appspot.com",
  messagingSenderId: "813051086098",
  appId: "1:813051086098:web:a0ed8c883a1e7e9daf9fcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)
const storage = getStorage(app)

export {Auth, provider, db, storage};