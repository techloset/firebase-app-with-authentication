import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { del, update } from "../reducer/reducer";
import useTodo from "../hooks/UseTodo";

const list = () => {
  const [inpVisibility, setInpVisibility] = useState(false);
  const state = useSelector((state) => state.rootReducer.todosReducer.todos);
  const inpValue = useSelector(
    (state) => state.rootReducer.updateFieldReducer.value
  );
  let dispatch = useDispatch();
  const { deleteData, updateDb } = useTodo();
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
            {inpVisibility ? (
              <input
                type="text"
                defaultValue={item.value}
                className="border-blue-500 rounded-md pl-1 border-2 "
                onChange={(e) => {
                  dispatch(update({ index, value: e.target.value }));
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
                onClick={() => deleteData(item.id)}
              >
                Delete
              </button>
              <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
                onClick={(e) => {
                  inpVisibility && updateDb(item.id);
                  setInpVisibility(!inpVisibility);
                }}
              >
                {inpVisibility ? "Save" : "Edit"}
              </button>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default list;
