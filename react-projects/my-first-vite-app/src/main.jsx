import React from "react";
import ReactDOM from "react-dom/client";

// function based component
function FuncCompo() {
  return (
    <h1>
      <div>Hello React - Function Based Component - VDOM!</div>
    </h1>
  );
}

// for function based component
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<FuncCompo />);

// using actual DOM
const root_1 = document.getElementById("root_1");

// using virtual DOM
const root_2 = ReactDOM.createRoot(document.getElementById("root_2"));

// using setInterval for refreshing date and time after every 1000 ms (1 sec)
setInterval(() => {
  //
  root_1.innerHTML = `
  <div>
    <h1>Hello JS - ADOM!</h1>
    <input />
    <pre>${new Date().toLocaleTimeString()}</pre>
  </div>
`;

  //
  const username = "Alex";
  root_2.render(
    <div>
      <h1>Hello React - VDOM!</h1>
      <input />
      <pre>
        {/* data binding > the data in the variable is binded to the html elements*/}
        {username} {}
        {/* string interpolation > data within brackets is converted to string */}
        {4 + 5} {Math.random()} {}
        {new Date().toLocaleTimeString()}
      </pre>
    </div>
  );
}, 1000);
