import React, { useState, useEffect } from "react";
import "./App.css";

function UseEffectf() {
  const [userId, setUserId] = useState("1");
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setData(data);
      });
  }, []); //empty array is given to useEffect so as to stop UseEffect from Re-rendering itself again again, after each render.
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>App</h1>
      <button onClick={() => setUserId("2")}>Change user Id to 2</button>
      {data.map((user) => (
        <div>
          <p>{user.title}</p>
        </div>
      ))}
    </div>
  );
}

export default UseEffectf;
