import React, { useState } from 'react';
import "./App.css";

const App = () => {

  const [result,setResult] = useState("");

  const handleClick = (event)=>{
    event.stopPropagation();
    console.log("button is clicked!");
    setResult(result.concat(event.target.name));
  }

  const handleClear = (event)=>{
    event.stopPropagation();
    console.log("clear button is clicked!");
    setResult("");
  }
  
  const handleBackSpace = (event)=>{
    event.stopPropagation();
    console.log("backspace button is clicked!");
    setResult(result.slice(0,result.length-1));
  }

  const handleCalculate = (event)=>{
    event.stopPropagation();
    console.log("calculate button is clicked!");
    setResult(eval(result).toString());
  }

  const handleWrapper = (event)=>{
    event.stopPropagation();
    console.log("wrapper is clicked!");
    // setResult(eval(result).toString());
  }

  return (
    <>
    <div className="container mx-auto flex flex-col items-center" onClick={handleWrapper}>
        <div className="row">
            <input className="input" type="text" value={result}/>
        </div>
        <div className="row">
            <button name = "Clear" className="button" id = "clear" onClick={handleClear}>Clear</button>
            <button name = "C" className="button" id = "backspace" onClick={handleBackSpace}>C</button>
            <button name = "%" className="button" onClick={handleClick}>%</button> 
            <button name = "M-" className="button" onClick={handleClick}>M-</button>
        </div>
        <div className="row">
            <button name = "7" className="button" onClick={handleClick}>7</button>
            <button name = "8" className="button" onClick={handleClick}>8</button>
            <button name = "9" className="button" onClick={handleClick}>9</button>
            <button name = "*" className="button" onClick={handleClick}>*</button>
        </div>
        <div className="row">
            <button name = "4" className="button" onClick={handleClick}>4</button>
            <button name = "5" className="button" onClick={handleClick}>5</button>
            <button name = "6" className="button" onClick={handleClick}>6</button>
            <button name = "/" className="button" onClick={handleClick}>/</button>
        </div>
        <div className="row">
            <button name = "1" className="button" onClick={handleClick}>1</button>
            <button name = "2" className="button" onClick={handleClick}>2</button>
            <button name = "3" className="button" onClick={handleClick}>3</button>
            <button name = "+" className="button" onClick={handleClick}>+</button>
        </div>
        <div className="row">
            <button name = "0" className="button" onClick={handleClick}>0</button>
            <button name = "." className="button" onClick={handleClick}>.</button>
            <button name = "=" className="button" onClick={handleCalculate}>=</button>
            <button name = "-" className="button" onClick={handleClick}>-</button>
        </div>
    </div>
    </>
  )
}


export default App;