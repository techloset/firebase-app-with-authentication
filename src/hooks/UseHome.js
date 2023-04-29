import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../reducer/reducer";
import UseTodo from './UseTodo'
export default function UseHome() {
    const {getData}=UseTodo()
    const dispatch=useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        console.log('dfsa')
        onAuthStateChanged(auth, (user) => {
      const uid = user?.uid;

      if (!user) {
        navigate("/login");
      }
      else{
      dispatch(setUserId(uid))
      console.log('after')
        getData()
      }
    });
  }, []);
 
}
