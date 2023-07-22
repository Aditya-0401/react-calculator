// @ts-nocheck
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleByTag = (event) => {
    event.stopPropagation();
    if (event.target.name === "Clear") {
      setResult("");
    } else if (event.target.name === "C") {
      setResult(result.slice(0, result.length - 1));
    } else if (event.target.name === "=") {
      setResult(eval(result).toString());
    } else if (event.target.tagName === "BUTTON") {
      setResult(result.concat(event.target.name));
    }
  };

  return (
    <>
      <div
        className="container mx-auto flex flex-col items-center"
        onClick={handleByTag}
      >
        <div className="row">
          <input className="input" type="text" value={result} />
        </div>
        <div className="row">
          <button name="Clear" className="button" id="clear">
            Clear
          </button>
          <button name="C" className="button" id="backspace">
            C
          </button>
          <button name="%" className="button">
            %
          </button>
          <button name="M-" className="button">
            M-
          </button>
        </div>
        <div className="row">
          <button name="7" className="button">
            7
          </button>
          <button name="8" className="button">
            8
          </button>
          <button name="9" className="button">
            9
          </button>
          <button name="*" className="button">
            *
          </button>
        </div>
        <div className="row">
          <button name="4" className="button">
            4
          </button>
          <button name="5" className="button">
            5
          </button>
          <button name="6" className="button">
            6
          </button>
          <button name="/" className="button">
            /
          </button>
        </div>
        <div className="row">
          <button name="1" className="button">
            1
          </button>
          <button name="2" className="button">
            2
          </button>
          <button name="3" className="button">
            3
          </button>
          <button name="+" className="button">
            +
          </button>
        </div>
        <div className="row">
          <button name="0" className="button">
            0
          </button>
          <button name="." className="button">
            .
          </button>
          <button name="=" className="button">
            =
          </button>
          <button name="-" className="button">
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
