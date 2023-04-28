import { useDispatch, useSelector, } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../config/firebase";
import { addDoc, collection, getDocs ,doc,  updateDoc, deleteField, deleteDoc} from "firebase/firestore";
import React, { useEffect } from "react";
import { add, filtering,setValue,del } from "../reducer/reducer";
export default ()=>{
    const dispatch = useDispatch();
    const input = useSelector((state) => state.rootReducer.inpValueReducer.value);
    const filterInput = useSelector(
      (state) => state.rootReducer.filterReducer.value
    );
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "todo"));
      querySnapshot.forEach((doc) => {
        const data = doc?.data();
        dispatch(add({...data, id:doc.id}));
      });
    }
 
    const storeData = async (value) => {
      try {
        console.log(value)
        const docRef =await addDoc(collection(db, "todo"), {
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
      console.log(input)
      if(input.value!=''){

        storeData(input);
        dispatch(setValue(""));
      }
    }
   async function deleteData(id){
    // console.log(input)
    // const cityRef = doc(db, 'todo')
 dispatch(
  del(id)
 )
await deleteDoc(doc(db, "todo", id));

    }
    async function updateData(id,value){
console.log(id)

const docRef = doc(db, 'todo', id);
  await updateDoc(docRef, {
    value: 'fdsafdjkasdfj'
  });
// await docRef.update({
//   value,id
// });
// await docRef.set({
//   value: 'new value'
// }, { merge: true });
    }

  return(
    {
        storeData,
        dispatch,
        input,
        filterInput,
        setStoreData,
        deleteData,
        getData,
        updateData

    }
  )
}