import {
  combineReducers,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteField,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../config/Firebase";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    userId: "",
  },
  reducers: {
    setUserId: (state, { payload }) => {
      state.userId = payload;
    },

 
    empty: (state) => {
      state.todos = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(add.pending, (state, action) => {});
    builder.addCase(add.fulfilled, (state, { payload }) => {
      state.todos = [...state.todos, payload];
    });
    builder.addCase(add.rejected, (state, action) => {});
    builder.addCase(getDbData.pending, (state, { payload }) => {});
    builder.addCase(getDbData.fulfilled, (state, { payload }) => {
      state.todos = payload;
    });
    builder.addCase(getDbData.rejected, (state, action) => {});
    builder.addCase(DeleteTodo.pending, (state, { payload }) => {});
    builder.addCase(DeleteTodo.fulfilled, (state, { payload }) => {
      let arr = state.todos.filter((item, index) => payload != item.id);
      state.todos = arr;
    });
    builder.addCase(DeleteTodo.rejected, (state, action) => {});
    builder.addCase(updateTodo.pending, (state, { payload }) => {});
    builder.addCase(updateTodo.fulfilled, (state, { payload }) => {
      let updatedArr = state.todos.map((item) => {
        return item.id != payload.id ? item : payload;
      });
      state.todos = updatedArr;
    });
    builder.addCase(updateTodo.rejected, (state, action) => {});
  },
});
export const { delTodo, update, setUserId } = todoSlice.actions;

export default todoSlice.reducer;
export const add = createAsyncThunk(
  "todos/add",
  async (dispatch, { getState }) => {
    try {
      const { userId } = getState().todoSlice;
      const docRef = await addDoc(collection(db, userId), {
        value: dispatch,
      });

      return { value: dispatch, id: docRef.id };
    } catch (e) {}
  }
);
export const getDbData = createAsyncThunk(
  "todos/getDbData",
  async (dispatchedUserId, thunkApi) => {
    try {
      const querySnapshot = await getDocs(collection(db, dispatchedUserId));
      const Data = [];
      querySnapshot.forEach((doc) => {
        const data = doc?.data();

        Data.push({ ...data, id: doc.id });
      });

      return Data;
    } catch (err) {}
  }
);
export const DeleteTodo = createAsyncThunk(
  "todos/DeleteTodo",
  async (dispatchedtodoId, { getState }) => {
    try {
      const id = getState().todoSlice.userId;
      const docRef = await deleteDoc(doc(db, id, dispatchedtodoId));

      return dispatchedtodoId;
    } catch (err) {}
  }
);
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (dispatch, { getState }) => {
    try {
      const id = getState().todoSlice.userId;

      const docRef = doc(db, id, dispatch.id);
      await updateDoc(docRef, {
        value: dispatch.value,
      });
      return dispatch;
    } catch (err) {}
  }
);
