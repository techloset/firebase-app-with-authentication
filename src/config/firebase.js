
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {getAuth,onAuthStateChanged} from 'firebase/Auth'
// import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCl5KBt2473kPt38t5JCzuITJSerRfvhLw",
  authDomain: "todo-app-a1c3f.firebaseapp.com",
  projectId: "todo-app-a1c3f",
  storageBucket: "todo-app-a1c3f.appspot.com",
  messagingSenderId: "445494023588",
  appId: "1:445494023588:web:5e94591480f9a33acb5d31",
  measurementId: "G-1M9FKQFFNV"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Initialize Firebase
// const auth =getAuth(firebaseConfig)
// onAuthStateChanged(auth,user=>{
//   if(user){
//     console.log('logged')
//   }else{
//     console.log('not user')
//   }
// })