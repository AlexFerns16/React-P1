import React from "react";
import ReactDOM from "react-dom/client";

// associated to method 1
function myFunction() {
  console.log(Math.random());
}

function Button() {
  let counter = 0;

  //   method 1: function 'myFunction' as a value to the 'onClick' property
  //   --------------------------------------------------------------------------------------
  return <button onClick={myFunction}>{counter}</button>;

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
  //   return <button onClick={() => console.log(Math.random())}>{counter}</button>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Button />);
