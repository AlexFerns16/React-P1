import React from "react";
import ReactDOM from "react-dom/client";

function myFunction() {
  console.log(Math.random());
}

function Button() {
  let counter = 0;
  return <button onClick={myFunction}>{counter}</button>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Button />);
