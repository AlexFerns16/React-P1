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
  // returns a stateful value, and a function to update the stateful value it in an array, [stateful value, function]
  const [counter, setCounter] = useState(0);
  // whenever 'handleclick' is called, it will update the 'counter' value (stateful value) by calling 'setCounter' function
  // as soon as the 'state' is updated, react will call the 'Button()' function again i.e. it will re-render the 'Button' component
  // and the 'counter' variable will be 're-created' with the 'new value', which will be provided by the 'useState' hook
  // and your return statement will return 'new virtual DOM' with 'updated value'
  // react will compare the virtual DOM with actual DOM and will update only updated part in actual DOM
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
