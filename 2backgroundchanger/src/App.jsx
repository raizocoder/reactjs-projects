import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <>
      <div
        style={{ backgroundColor: color, height: "400px", textAlign: "center" }}
      >
        <button
          style={{ margin: "10px", fontSize: "20px" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ margin: "10px", fontSize: "20px" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          style={{ margin: "10px", fontSize: "20px" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ margin: "10px", fontSize: "20px" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
      </div>
    </>
  );
}

export default App;
