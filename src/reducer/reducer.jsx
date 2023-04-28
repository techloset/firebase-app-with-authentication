
import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import Inp from "../components/inp";


const initialState = {
  todos: []
};
const changeSlice=createSlice({
  name:'updateInput',
  initialState:{
    value:''
  },
  reducers:{
    setInpValue:(state,action)=>{
      state.value=action.payload
    }
  }
})  
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {

    add: (state,{payload}) => { 
      const isIncludes=state.todos.find((item)=>item.value==payload.value)
      
   if(!isIncludes){
     state.todos = [...state.todos ,payload];
    }
      
    },
    filtering:(state,action)=>{
      let filterArr  = state.todos.map((item) => {
        if (item.props.children.includes(action.payload)) {
          return <p className="todo w-[13.9125rem]">{item.props.children.trim()}</p>  
        } else {
          
            return    <p className="todo hide w-[13.9125rem]">{item.props.children.trim()}</p>
         
            
          
        }
      })
      
      state.todos=filterArr

    },
    del:(state,action)=>{

     let arr= state.todos.filter ((item, index) => action.payload != item.id);
     state.todos=arr;
    },
    update:(state,action)=>{
     
   let updatedArr=  state.todos.map((item, index) => {
     
 if(item===state.todos[action.payload.key] ){

   
   if (action.payload.target.textContent.toLowerCase() == "edit") {
     action.payload.target.textContent = "Save";

     return <Inp index={index} content={item.props.children} />
    } else if ( action.payload.target.textContent.toLowerCase() == "save") {
      action.payload.target.textContent = "Edit";
      
      return  <p className="todo w-[13.9125rem]"> 
{action.payload.content}
       
        </p>
      }
    }
    else{
      return item
    }
      
      
    })

 state.todos=updatedArr 
    }
    
 
  },
  
});
const initialInp={
  value:''
}
const inpSlice=createSlice({
  name:'inpValue',
  initialState:initialInp,
  reducers:{
    setValue:(state,action)=>{
      state.value=action.payload
    }
  }
})
const filterInp={
  value:''
}
const filterSlice=createSlice({
  name:'filterValue',
  initialState:filterInp,
  reducers:{
    setfilterValue:(state,action)=>{
      state.value=action.payload
    }
  }
})


export const rootReducer=combineReducers({
  inpValueReducer:inpSlice.reducer ,
  todosReducer:todoSlice.reducer,
  filterReducer:filterSlice.reducer,
  updateFieldReducer:changeSlice.reducer,

})
export const { add,filtering,del,update } = todoSlice.actions;
export const { setValue } = inpSlice.actions;
export const { setfilterValue } = filterSlice.actions;
export const { setInpValue } = changeSlice.actions;