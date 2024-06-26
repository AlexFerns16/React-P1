import React from "react";
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

  // initializing the counter
  let counter = 0;

  // incrementing the counter function
  const setCounter = () => {
    counter = counter + 1;
    // debugging the increment counter function
    console.log(`debug inside setCounter function, count: ${counter}`);
  };

  // debugging the virtual DOM
  console.log(`debug inside Button() function, count: ${counter}`);

  // return
  return <button onClick={setCounter}>{counter}</button>;
}

// creating a virtual DOM
ReactDOM.createRoot(document.getElementById("root")).render(<Button />);
