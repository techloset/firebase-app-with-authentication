// import React from 'react'
// // import { decrement,increment } from './counter/counterSlice'
// import { decrement,increment,byamount } from './reducers/count'
// import { useSelector,useDispatch } from 'react-redux'

// export default function Counter() {
//   // const count = useSelector((state) => state.counter.value)
//   // const count=useSelector((state)=>state.Counter.value)
//   const count=useSelector(state=>state.value.number);
//  const dispatch =useDispatch();
 
//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//         <button
//           onClick={() => dispatch(byamount(20))}
//         >
//           increment by amout
//           </button>
//       </div>
//     </div>
//   )
// }