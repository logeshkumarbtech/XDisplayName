import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";

function App() {
  const [obj, setObj] = useState({
    firstname: "",
    lastname: "",
  });
  const [fullname, setFullname] = useState("");

  console.log(obj.firstname, obj.lastname);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firstname && obj.lastname) {
      const newName = obj.firstname + " " + obj.lastname;
      console.log(newName);
      setFullname(newName);
    }
  };

  const handleFistNameChange = (e) => {
    setObj({ ...obj, firstname: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setObj({ ...obj, lastname: e.target.value });
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            placeholder=""
            value={obj.firstname}
            onChange={handleFistNameChange}
          ></input>
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            placeholder=""
            value={obj.lastname}
            onChange={handleLastNameChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullname && (
        <div>
          <p>Full Name: {fullname}</p>
        </div>
      )}
    </div>
  );
}

export default App;
