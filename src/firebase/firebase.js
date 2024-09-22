import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEWjx7C5hcXhK7V0fKB5WFsIVLQr9mQRU",
  authDomain: "berkanozmen-5858.firebaseapp.com",
  projectId: "berkanozmen-5858",
  storageBucket: "berkanozmen-5858.appspot.com",
  messagingSenderId: "1087418035477",
  appId: "1:1087418035477:web:d569a0d2c7205451d18d1c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
