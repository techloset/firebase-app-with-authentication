import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCl5KBt2473kPt38t5JCzuITJSerRfvhLw",
  authDomain: "todo-app-a1c3f.firebaseapp.com",
  projectId: "todo-app-a1c3f",
  storageBucket: "todo-app-a1c3f.appspot.com",
  messagingSenderId: "445494023588",
  appId: "1:445494023588:web:5e94591480f9a33acb5d31",
  measurementId: "G-1M9FKQFFNV",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
