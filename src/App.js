import React, {useState} from "react";
import ReactDOM, { render } from "react-dom";
// import './App.css';

export const sum = (val1,val2) =>{
  return val1 + val2;
};
export const rest = (val1,val2) =>{
  return val1 - val2;
};
export const mult = (val1,val2) =>{
  return val1 * val2;
};
export const div = (val1,val2) =>{
  return val1 / val2;
};

function App() {
  

  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%", ].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      {" "}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        

        <button onClick={() => setInput(input.substr(0, input.length - 1))} title="Bce">
          CE
        </button>

        
        <button onClick={() => setInput("")} value="" title="Bc">
          C
        </button>
      </div>
      <div className="operations subgrid">
    
      <button onClick={(e) => setInput(input + e.target.value)} value="/" title="Bdiv">
          {" "}
          /
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="*" title="Bmult">
          {" "}
          *
        </button>
    
        <button onClick={(e) => setInput(input + e.target.value)} value="-" title="Brest">
          {" "}
          -{" "}
        </button>


        <button onClick={(e) => setInput(input + e.target.value)} value="+" title="Bsum">
          +
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="-" >
          +/-
        </button>
        
        <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
    
}
export default App;