import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";
import { ReducerHookExample } from "./ReducerHook";
import { TextField } from "./TextField";

function App() {
  const [input, setInput] = useState<any>("");

  return (
    <div className="App">
      <TextField
        text={input}
        person={{ firstName: "Test", lastName: "lastname" }}
        handleChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
      <ReducerHookExample />
    </div>
  );
}

export default App;
