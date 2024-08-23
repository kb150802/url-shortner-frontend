import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
const Login = ({setJwt}) => {
  const {
    showLogin,
    setShowLogin,
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  } = useLogin(setJwt);

  return (
    <div className="flex flex-col max-w-md mx-auto p-4 m-4 bg-white rounded shadow border border-gray-300">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-gray-700" htmlFor="username">
            Username (Email)
          </label>
          <input
            id="username"
            type="text"
            className="border border-gray-300 p-2 rounded w-2/3 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border border-gray-300 p-2 rounded w-2/3 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button className="button" onClick={handleLogin}>
            {" "}
            {showLogin ? "Login" : "Register"}
          </button>
        </div>
        {showLogin && (
          <div className="flex justify-center">
            <button
              className="bg-red-500 text-black hover:bg-red-600 hover:text-white rounded p-2 m-2"
              onClick={() => {
                setShowLogin(false);
                setUsername("");
                setPassword("");
              }}
            >
              Don't have an account? Register Now
            </button>
          </div>
        )}
        {!showLogin && (
          <div className="flex justify-center">
            <button
              className="bg-red-500 text-black hover:bg-red-600 hover:text-white rounded p-2 m-2"
              onClick={() => {
                setShowLogin(true);
                setUsername("");
                setPassword("");
              }}
            >
              Go back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
