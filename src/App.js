import "./App.css";
import Login from "./components/Login";
import React,{ useState } from "react";
import ShortenUrl from "./components/ShortenUrl";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('jwtToken'));
  console.log(jwt);

  const handleJwtChange = (newJwt)=> {
    setJwt(newJwt);
    localStorage.setItem('jwtToken', newJwt);
  }
  const handleLogout = ()=> {
    localStorage.removeItem('jwtToken');
    setJwt(null)
  }
  return (
    <>
      {jwt ? <ShortenUrl handleLogout={handleLogout} />: <Login handleJwtChange={handleJwtChange}/>}
    </>
  );
}

export default App;
