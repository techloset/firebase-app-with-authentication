import List from "./list";
import React, { useEffect } from "react";
import { setValue } from "../reducer/reducer";
import { setfilterValue } from "../reducer/reducer";
import useTodo from "../hooks/useTodo";

const todo = () => {
  const { storeData, dispatch, input, filterInput,setStoreData,getData } = useTodo()
  useEffect(() => {
    getData();
  }, []);
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
                    setStoreData(input)
                  
                  }
                }}
                placeholder="Add Tasks"
                onChange={(e) => dispatch(setValue(e.target.value))}
                value={input}
              />
              <button
                className=" absolute right-0 px-4 py-[8.5px] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
                onClick={() => {
                  setStoreData(input)
                  
                }}
              >
                Add
              </button>
            </div>
            <input
              onChange={(e) => {
                dispatch(setfilterValue(e.target.value));
                dispatch(filtering(e.target.value));
              }}
              placeholder="Filter Tasks"
              className="w-full mt-4 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={filterInput}
            />
          </div>
        </div>

        <List></List>
      </>
    </div>
  );
};

export default todo;
