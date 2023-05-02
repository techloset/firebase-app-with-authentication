import List from "./TodoListComponent";
import React, { useEffect } from "react";
// import { setValue } from "../reducer/Reducers";

import useTodo from "../hooks/UseTodo";

const Todo = () => {
  const { storeData,   input, setInput} = useTodo();
  
  return (
    <div className="">
      <>
        <div className="flex flex-col items-center justify-center h-auto mt-10">
          <div className=" max-w-md rounded-lg shadow-lg p-4 w-1/2">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    storeData(input)
                  setInput('')
                  }
                }}
                placeholder="Add Tasks"
                onChange={(e) => {setInput(e.target.value)}}
                value={input}
              />
              <button
                className=" absolute right-0 px-4 py-[8.5px] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
                onClick={() => {
                  storeData(input)
                  setInput("");
                  
                }}
              >
                Add
              </button>
            </div>
          
          </div>
        </div>

        <List></List>
      </>
    </div>
  );
};

export default Todo;
