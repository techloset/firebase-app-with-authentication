import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import Inp from "../components/inp";

const initialState = {
  todos: [],
};
const changeSlice = createSlice({
  name: "updateInput",
  initialState: {
    value: "",
  },
  reducers: {
    setInpValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const isIncludes = state.todos.find(
        (item) => item.value == payload.value
      );

      if (!isIncludes) {
        state.todos = [...state.todos, payload];
      }
    },

    del: (state, action) => {
      let arr = state.todos.filter((item, index) => action.payload != item.id);
      state.todos = arr;
    },
    update: (state, { payload }) => {
      const { index, value } = payload;
      state.todos[index].value = value;
    },
    empty:(state)=>{
      state.todos=[]
    }
  },
});
const initialInp = {
  value: "",
};
const inpSlice = createSlice({
  name: "inpValue",
  initialState: initialInp,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    id: null,
  },
  reducers: {
    setUserId: (state, { payload }) => {
      state.id = payload;
    },
  },
});

export const rootReducer = combineReducers({
  inpValueReducer: inpSlice.reducer,
  todosReducer: todoSlice.reducer,
  userId: userIdSlice.reducer,
  updateFieldReducer: changeSlice.reducer,
});
export const { add, del, update,empty } = todoSlice.actions;
export const { setValue } = inpSlice.actions;
export const { setUserId } = userIdSlice.actions;

export const { setInpValue } = changeSlice.actions;
