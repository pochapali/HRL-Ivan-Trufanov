import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [age, setAge] = useState(10);
  const [HRL, setHRL] = useState();
  function calculate() {
    const result =
      ((220 - age) * 0.65).toFixed(2) + "-" + ((220 - age) * 0.85).toFixed(2);
    setHRL(result);
  }
  return (
    <div className="HRL">
      <header className="HRL calculator"></header>
      <form>
        <div>
          <div>
            <label>Age</label>
          </div>
          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <div>
            <label>HRL</label>
          </div>
          <output>{HRL}</output>
          <div>
            <button type="button" onClick={calculate}>
              calculate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
