import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Button() {
  //
  const [counter, setCounter] = useState(0);

  //
  const handleclick = () => {
    setCounter(counter + 1);
  };

  // debugging the virtual DOM
  console.log(`debug inside Button() function, count: ${counter}`);

  // return
  return <button onClick={handleclick}>+1</button>;
}

function Display() {
  return <div>...</div>;
}

// method 1
// creating a virtual DOM > rendering the list of components
// ----------------------------------------------------------------------------------------------------------------
// ReactDOM.createRoot(document.getElementById("root")).render([
//   <Button />,
//   <Display />,
// ]);

// method 2
// creating a virtual DOM > rendering components in a 'div' tag > adds an additional div tag
// ----------------------------------------------------------------------------------------------------------------
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <div>
//     <Button />
//     <Display />
//   </div>
// );

// method 3
// creating a virtual DOM > rendering components in a 'React.Fragment' tag > doesn't add an additional tag
// ----------------------------------------------------------------------------------------------------------------
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.Fragment>
//     <Button />
//     <Display />
//   </React.Fragment>
// );

// method 4
// creating a virtual DOM > shortcut for 'React.Fragment' tag > empty tag
// ----------------------------------------------------------------------------------------------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Button />
    <Display />
  </>
);
