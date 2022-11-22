import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

    // @ts-ignore
    const [ numberOne, setNumberOne ] = useState("")

    useEffect(() => {
    }, [numberOne])

  const onNumberClick = (num: string) => {
         // @ts-ignore
        setNumberOne(numberOne + num)
  };

    return (
    <div className="App">
      <main>
        <div id="screen">0</div>
        <div id="pad">
          <div className="pad_numbers">
              <button onClick={onNumberClick.bind(null, "7")}>7</button>
              <button onClick={onNumberClick.bind(null, "8")}>8</button>
              <button onClick={onNumberClick.bind(null, "9")}>9</button>
              <button onClick={onNumberClick.bind(null, "4")}>4</button>
              <button onClick={onNumberClick.bind(null, "5")}>5</button>
              <button onClick={onNumberClick.bind(null, "6")}>6</button>
              <button onClick={onNumberClick.bind(null, "1")}>1</button>
              <button onClick={onNumberClick.bind(null, "2")}>2</button>
              <button onClick={onNumberClick.bind(null, "3")}>3</button>
              <span>,</span>
              <span>AC</span>
          </div>
          <div className="pad_operators">
              <span>X</span>
              <span>-</span>
              <span>+</span>
              <span>=</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
