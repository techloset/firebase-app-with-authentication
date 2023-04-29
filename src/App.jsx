
import Todo from "./components/todo";
import Navbar from "./components/navbar/Navbar";
// import UseHome from "./hooks/UseHome";/
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "./reducer/reducer";
import useTodo from './hooks/UseTodo'
function App() {
  const {getData}=useTodo()
  const dispatch=useDispatch()
    const navigate = useNavigate();
    useEffect(() => {

  onAuthStateChanged(auth, (user) => {
    const uid = user?.uid;
    if (!uid) {
      navigate("/login");
    }
    else{
      getData(uid)
       dispatch(setUserId(uid))
    }
  });
  }, []);
  return (
    <>
      <Navbar />
      <Todo></Todo>
    </>
  );
}
export default App;
