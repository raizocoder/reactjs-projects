import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const btnGenerate = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    setColor(`rgb(${red},${green},${blue})`);
    // let btn = document.querySelector('.btnGenerate');
    // console.log(btn);
  };
  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <div className="inputField">
          <input type="text" readOnly value={color}  placeholder="Click Generate Button"/>
        </div>
        <div className="btnGenerate">
          <button onClick={btnGenerate}>Generate</button>
        </div>
      </div>
    </>
  );
}

export default App;
