import React from "react";
import ReactDOM from "react-dom/client";

function FuncCompo() {
  return (
    <h1>
      <div>Hello React!</div>
    </h1>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<FuncCompo />);
