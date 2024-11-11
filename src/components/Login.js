import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { DotLoader } from "react-spinners";

const Login = ({ handleJwtChange }) => {
  const {
    showLogin,
    setShowLogin,
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    isLoading,
  } = useLogin(handleJwtChange);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#3b82f6] to-[#6366f1] p-4">
      {isLoading ? (
        <DotLoader color="#2b4ae2" />
      ) : (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-8 space-y-8">
            {/* Header */}
            <div className="text-center text-[#3b82f6] dark:text-white font-bold text-3xl">
              {showLogin ? "Login" : "Register"}
            </div>

            {/* Username Input */}
            <div className="flex flex-col items-center space-y-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Username (Email)
              </label>
              <input
                id="username"
                type="text"
                className="input w-full max-w-[320px] bg-[#F3F4F6] dark:bg-gray-700 border-[#E5E7EB] dark:border-gray-600 text-gray-900 dark:text-gray-100"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col items-center space-y-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="input w-full max-w-[320px] bg-[#F3F4F6] dark:bg-gray-700 border-[#E5E7EB] dark:border-gray-600 text-gray-900 dark:text-gray-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                className="button w-full max-w-[320px] bg-[#3b82f6] text-white hover:bg-[#2563eb] dark:bg-[#6366f1] dark:hover:bg-[#4f46e5]"
                onClick={handleLogin}
              >
                {showLogin ? "Login" : "Register"}
              </button>
            </div>

            {/* Toggle Login/Register */}
            <div className="flex justify-center space-x-4">
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${"bg-[#F3F4F6] dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#E5E7EB] dark:hover:bg-gray-600"}`}
                onClick={() => {
                  setShowLogin(!showLogin);
                  setUsername("");
                  setPassword("");
                }}
              >
                {showLogin
                  ? "Don't have an account? Register Now"
                  : "Go back to Login"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
