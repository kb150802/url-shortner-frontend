import "./App.css";
import Login from "./components/Login";
import React,{ useState } from "react";

function App() {
  const [jwt, setJwt] = useState(null);
  return (
    <>
      {jwt ? <></>: <Login/>}
    </>
  );
}

export default App;
