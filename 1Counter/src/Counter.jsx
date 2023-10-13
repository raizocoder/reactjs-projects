import { useState } from "react";
const Counter = () => {
  const [num, setNum] = useState(0);
  function PlusNum() {
    setNum(num + 1);
  }
  function MinusNum() {
    if (num <= 0) {
      return 0;
    }
    setNum(num - 1);
  }
  function ResetNum() {
    setNum((n) => {
      return n - n;
    });
  }
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      <h1>Counter</h1>
        <h1 style={{ fontSize: "60px" }}>{num}</h1>
        <div>
          <button
            style={{ width: "70px", height: "50px", margin: "7px" }}
            onClick={MinusNum}
          >
            -
          </button>
          <button style={{ width: "70px", height: "50px" }} onClick={PlusNum}>
            +
          </button>
        </div>
        <button style={{ fontSize: "20px" }} onClick={ResetNum}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
