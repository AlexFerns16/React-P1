import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// associated to method 1
// function myFunction() {
//   console.log(Math.random());
// }

function Button() {
  //   method 1: function 'myFunction' as a value to the 'onClick' property
  //   --------------------------------------------------------------------------------------
  //   return <button onClick={myFunction}>{counter}</button>;

  //   method 2: directly defining an anonymous function as a value to the 'onClick' property
  //   --------------------------------------------------------------------------------------
  //   return (
  //     <button
  //       onClick={function () {
  //         console.log(Math.random());
  //       }}
  //     >
  //       {counter}
  //     </button>
  //   );

  //   method 3: directly defining an arrow function as a value to the 'onClick' property
  //   --------------------------------------------------------------------------------------

  // useState
  // every 'hook' in react starts with 'use'
  // 'hook' can be called anytime in the lifecycle of a component
  // whenever the state value changes, it maintains the state of a variable
  // in our case the state is nothing but the 'counter' value
  // returns a stateful value, and a function to update it in an array, [stateful value, function]
  const [counter, setCounter] = useState(0);
  const handleclick = () => {
    setCounter(counter + 1);
  };

  // debugging the virtual DOM
  console.log(`debug inside Button() function, count: ${counter}`);

  // return
  return <button onClick={handleclick}>{counter}</button>;
}

// creating a virtual DOM
ReactDOM.createRoot(document.getElementById("root")).render(<Button />);
