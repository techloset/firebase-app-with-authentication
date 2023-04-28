import React, { useEffect, useRef, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setInpValue } from '../reducer/reducer'
const inp = ({index,content}) => {
    const value=useSelector(state=>state.rootReducer.updateFieldReducer.value)
    const dispatch=useDispatch()
useEffect(()=>{

    dispatch(setInpValue(content))
}
,[])
  return (
    <input className="inputEdit border rounded-md focus:outline-none px-2 focus:border-blue-500" 

      onChange={(e)=>{dispatch(setInpValue(e.target.value))}}
      value={value} 
      
    ></input>
  )
}

export default inp
