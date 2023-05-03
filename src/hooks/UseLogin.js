import React, { useState } from "react";
import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function UseLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function authenticate(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("You are logged In");
      navigate("/");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        toast.error("Invalid email address")
      } else if (err.code == "auth/missing-password") {
        toast.error("Kindly Enter Password");
      } else if (err.code == "auth/wrong-password") {
        toast.error("Wrong Password");
      } else if (err.code == "auth/user-not-found") {
        toast.error("First Create a Account");
      }
    }
  }
  return {
    authenticate,email,setEmail,password,setPassword
    
  };
}
