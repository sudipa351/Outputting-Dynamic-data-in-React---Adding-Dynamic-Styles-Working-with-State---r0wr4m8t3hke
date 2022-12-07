import React, { useState, useEffect } from "react";

import "../styles/App.css";

const App = () => {
  //code here
  const [name, setName] = useState("____");
  let dataN = "";
  function store(e) {
    dataN = e.target.value;
  }
  function final() {
    setName(dataN);
  }
  return (
    <div id="main">
      <input id="input" onChange={(e) => store(e)}></input>
      <button id="button" onClick={final}>
        Click
      </button>
      <p id="text"> Hello my name is {name} and I study at Newton School</p>
    </div>
  );
};

export default App;
