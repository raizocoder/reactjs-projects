import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  function handleValue(e) {
    setInputValue(inputValue.concat(e.target.value));
  }
  function allClear() {
    setInputValue("");
  }
  function deleteValue() {
    setInputValue(inputValue.slice(0, -1));
  }
  function calculateValue() {
    if (inputValue) {
      setInputValue(eval(inputValue).toString());
    }
  }

  return (
    <>
      <div className="container">
        <div className="input">
          <input
            type="text"
            className="inputField"
            name=""
            placeholder="0"
            value={inputValue}
            readOnly
          />
        </div>
        <div className="keywords">
          <div>
            <input type="button" value="AC" onClick={allClear} />
            <input type="button" value="DEL" onClick={deleteValue} />
            <input type="button" value="%" onClick={handleValue} />
            <input type="button" value="/" onClick={handleValue} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleValue} />
            <input type="button" value="8" onClick={handleValue} />
            <input type="button" value="9" onClick={handleValue} />
            <input type="button" value="*" onClick={handleValue} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleValue} />
            <input type="button" value="5" onClick={handleValue} />
            <input type="button" value="6" onClick={handleValue} />
            <input type="button" value="-" onClick={handleValue} />
          </div>
          <div>
            <input type="button" value="3" onClick={handleValue} />
            <input type="button" value="2" onClick={handleValue} />
            <input type="button" value="1" onClick={handleValue} />
            <input type="button" value="+" onClick={handleValue} />
          </div>
          <div>
            <input type="button" value="0" onClick={handleValue} />
            <input type="button" value="00" onClick={handleValue} />
            <input type="button" value="." onClick={handleValue} />
            <input type="button" value="=" onClick={calculateValue} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
