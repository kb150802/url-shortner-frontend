
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import React, { useState, useEffect } from "react";
import MyShortenedUrls from "./components/MyShortenedUrls";
import ShortenUrl from "./components/ShortenUrl";
import NavBar from "./components/NavaBar";


function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('jwtToken'));
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const handleJwtChange = (newJwt) => {
    setJwt(newJwt);
    localStorage.setItem('jwtToken', newJwt);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setJwt(null);
    window.location.href="http://localhost:3000/";
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  // Apply dark mode class to the root element based on state
  useEffect(() => {
    console.log("Mode changed");
    
    if (darkMode) {
      console.log("Adding dark mode");
      
      document.documentElement.classList.add("dark");
    } else {
      console.log("removing dark mode");
      
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      {jwt ? (
        <>
        <NavBar handleLogout={handleLogout} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        <Routes>
          <Route path="/dashboard" element={<ShortenUrl handleLogout={handleLogout} />} />

          <Route path="/my-short-urls" element={<MyShortenedUrls/>} />
        </Routes>
        </>
      ) : (
        <Login handleJwtChange={handleJwtChange} />
      )}
    </Router>
  );
}

export default App;
