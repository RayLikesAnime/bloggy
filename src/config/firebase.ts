// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnxoVI4vbcYO-u17XtNGXayi-C5RdIaps",
  authDomain: "bloggy-1dd0b.firebaseapp.com",
  projectId: "bloggy-1dd0b",
  storageBucket: "bloggy-1dd0b.appspot.com",
  messagingSenderId: "416225235902",
  appId: "1:416225235902:web:444a5e9f532ce88e255fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);