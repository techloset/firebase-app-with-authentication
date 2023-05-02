
import Todo from './components/Todo'
import Navbar from "./components/navbar/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/Firebase";
import { setUserId } from './store/reducer/Reducers';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getDbData } from './store/reducer/Reducers';
import { useNavigate } from "react-router-dom";
function App() {
const dispatch=useDispatch()
const navigate=useNavigate()

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {

        const uid = user?.uid;
        if (!uid) {
          navigate("/login");
        }
        else{
         dispatch( getDbData(uid))
           dispatch(setUserId(uid))
        }
      })

  }, []);
  return (
    <>
      <Navbar />
      <Todo></Todo>
    </>
  );
}
export default App;
