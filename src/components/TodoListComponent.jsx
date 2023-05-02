import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo,updateTodo } from "../store/reducer/Reducers";
import useTodo from "../hooks/UseTodo";
const list = () => {
  const [inpVisibility, setInpVisibility] = useState({visibility:false,id:''});
  const [updatedValue, setUpdatedValue] = useState('');
  const state = useSelector((state) => state.todoSlice.todos);

  let dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl font-bold  mb-2 self-center w-[30%] mt-10">
        Tasks
      </h1>

      {state.map((item, index) => {
        return (
          <div
            className="flex items-center justify-between py-2 border-b-2 border-gray-300"
            key={index}
          >
            {(inpVisibility.visibility &&item.id==inpVisibility.id)? (
              
              <input
                type="text"
                defaultValue={item.value}
                className="border-blue-500 rounded-md pl-1 border-2 "
                onChange={(e) => {
                  setUpdatedValue(e.target.value)
                }}
              />
            ) : (
              <p className={`text-lg  todos w-[13.9125rem]  text-gray-500`}>
                {item.value}
              </p>
)}

            <>
              <button
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
                onClick={() => dispatch(DeleteTodo(item.id))}
              >
                Delete
              </button>
              <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
                onClick={(e) => {
                 if(inpVisibility.visibility){
 dispatch(updateTodo({value:updatedValue,id:item.id}))
                 }
                 else{

                   setUpdatedValue(item.value)
                  }
                  setInpVisibility({visibility:!inpVisibility.visibility,id:item.id});
                }}
              >
                {(inpVisibility.visibility &&item.id==inpVisibility.id)? "Save" : "Edit"}
              </button>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default list;
