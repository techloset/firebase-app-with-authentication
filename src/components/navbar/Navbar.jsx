import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase";
import { useDispatch } from "react-redux";

// import { empty } from "../../reducer/Reducers";
export default () => {      
  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-blue-500 text-[1.5rem] font-bold">
              Todo
            </a>
          </div>
          <div className="flex">
             
            
            <button
            onClick={async()=>{
              await signOut(auth)
            }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded"
            >
         Log Out
            </button>
    
          </div>
        </div>
      </div>
    </nav>
  );
};

 
