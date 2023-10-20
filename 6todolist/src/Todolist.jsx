import { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);

  function handleTodo() {
    if (todo) {
      setTodoList([...todolist, todo]);
      setTodo("");
    }
  }
  function deleteTodo(index) {
    todolist.splice(index, 1);
    setTodoList([...todolist]);
  }
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="todo"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Todolist</h2>
          <input
            type="text"
            placeholder="Enter Your Task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={{ fontSize: "20px", padding: "10px" }}
          />
          <button
            style={{ padding: "14px", margin: "5px", width: "100px" }}
            onClick={handleTodo}
          >
            Add
          </button>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>Here your list</p>
      <div style={{ textAlign: "center", marginBlock: "10px" }}>
        {todolist.map((value, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <li>{value}</li>
              <button
                style={{ marginInline: "20px" }}
                onClick={() => deleteTodo(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todolist;
