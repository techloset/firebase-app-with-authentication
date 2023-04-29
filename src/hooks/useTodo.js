import { useDispatch, useSelector, } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../config/firebase";
import { addDoc, collection, getDocs ,doc,  updateDoc, deleteField, deleteDoc} from "firebase/firestore";
import React, { useEffect } from "react";
import { add, setValue,del } from "../reducer/reducer";
export default ()=>{
    const dispatch = useDispatch();
    const input = useSelector((state) => state.rootReducer.inpValueReducer.value);
    const id=useSelector((state)=>state.rootReducer.userId.id)
    const todos=useSelector(state=>state.rootReducer.todosReducer.todos)
 
    async function getData(userId) { 
      const querySnapshot = await getDocs(collection(db, userId));
      querySnapshot.forEach((doc) => {
        const data = doc?.data();
        dispatch(add({...data, id:doc.id}));
      });
    }
 
    const storeData = async (value) => {
      try {
        const docRef =await addDoc(collection(db, id), {
          value,
       
        });

        dispatch(
          add({
            value,
           
            id:docRef.id
          })
        );
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    function setStoreData(input){
      if(input.value!=''){

        storeData(input);
        dispatch(setValue(""));
      }
    }
   async function deleteData(todoId){
  
 dispatch(
  del(todoId)
 )
await deleteDoc(doc(db, id, todoId));

    }
    async function updateDb(todoId){
      console.log(todoId)
const updatedTodo=todos.find(todo=>todo.id==todoId);
const {value}=updatedTodo
const docRef = doc(db, id,todoId);
  await updateDoc(docRef, {
    value
  });

    }

  return(
    {
        storeData,
        dispatch,
        input,
        setStoreData,
        deleteData,
        getData,
        updateDb

    }
  )
}