// "use client";
// import React, { createContext, useReducer } from "react";

// const initialState = { count: 0, sum: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return {
//         count: state.count + 1,
//         sum: state.sum + parseFloat(action.value),
//       };
//     case "decrement":
//       return {
//         count: state.count - 1,
//         sum: state.sum - parseFloat(action.value),
//       };
//     default:
//       throw new Error();
//   }
// }

// export const CardSelectionContext = createContext("");

// export function CardSelectionProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <CardSelectionContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CardSelectionContext.Provider>
//   );
// }
