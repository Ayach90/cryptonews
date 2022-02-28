import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  //TODO: Environment variables
  apiKey: "AIzaSyD7kAMqLs0i0v63LDH51Pbrbauf21FyUbU",
  authDomain: "cryptosnews-96012.firebaseapp.com",
  projectId: "cryptosnews-96012",
  storageBucket: "cryptosnews-96012.appspot.com",
  messagingSenderId: "738981351535",
  appId: "1:738981351535:web:e958eabcef41b829b6fd9a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
