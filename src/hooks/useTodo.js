import { useDispatch, useSelector } from "react-redux";


import React, { useEffect, useState } from "react";
import { add, delTodo } from "../store/reducer/Reducers";
export default () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const id = useSelector((state) => state.todoSlice.userId);

  const storeData = async (value) => {
    try {
      dispatch(add(input));
    } catch (e) {
    }
  }
  return {
    storeData,
    input,
    setInput,
  };
};
