import React ,{useState}from "react";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from "../config/firebase"
import {toast,ToastContainer} from 'react-toastify'
import { useNavigate } from "react-router-dom";

export default function UseSignUp() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    async   function createUser(e){
        e.preventDefault()
        try{

            const userCredential=await createUserWithEmailAndPassword(auth,email,password)
            toast.success('User is Created')
            navigate('/')
        }catch(err){
toast.error(err.message)
        }
        }
  return (
 {
    createUser,email,setEmail,password,setPassword
 }
  )
}