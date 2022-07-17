
import './App.css';
import {useState} from 'react';

function App() {



  return (
    <div className="App">
      <div className="result-equation">
      <p id="equation">hey</p>
      <p id="result">hello</p>
      </div>
      <div className="grid-container">
      <button id="ac" className="span-two">AC</button>
      <button id="del"  >DEL</button>
      <button id="devide">/</button>
      <button id="one">1</button>
      <button id="two">2</button>
      <button id="three">3</button>
      <button id="multiply">*</button>
      <button id="four">4</button>
      <button id="five">5</button>
      <button id="six">6</button>
      <button id="plus">+</button>
      <button id="seven">7</button>
      <button id="eight">8</button>
      <button id="nine">9</button>
      <button id="minus">-</button>
      <button id="dot">.</button>
      <button id="zero">0</button>      
      <button className="span-two" id="equals">=</button>
      </div>



    </div>
  );
}

export default App;
