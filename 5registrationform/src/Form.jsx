import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [Flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  function handleDetails(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!data.name || !data.email || !data.password) {
      alert("fill all fields!!!!!!");
    } else {
      setFlag(true);
      setName(data.name);
      setData({
        name: "",
        email: "",
        password: "",
      });
    }
  }
  return (
    <>
      <pre>
        {Flag ? (
          <h2> Hello {name} Thank you have register Successfully</h2>
        ) : (
          ""
        )}
      </pre>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="details">
          <h1>Registration Form</h1>
          <form
            action=""
            className="formData"
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={data.name}
              onChange={handleDetails}
              style={{ fontSize: "20px", padding: "10px", textAlign: "center" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleDetails}
              style={{ fontSize: "20px", padding: "10px", textAlign: "center" }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleDetails}
              autoComplete=""
              style={{ fontSize: "20px", padding: "10px", textAlign: "center" }}
            />
            <button type="submit" style={{fontSize:'20px',padding:'10px',textAlign:'center'}}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
