import React from "react";
import ReactDOM from "react-dom/client";

function Button() {
  let counter = 0;
  return <button>{counter}</button>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Button />);
