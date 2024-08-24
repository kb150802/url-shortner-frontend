import React from "react";
import useLogin from "../hooks/useLogin";

const ShortenUrl = ({ handleLogout }) => {
  return (
    <div className="flex flex-col max-w-md mx-auto p-4 m-4 bg-white rounded shadow border border-gray-300">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <label className="label">Link</label>
          <input className="input" type="text" />
        </div>
        <div className="flex items-center space-x-4">
          <label className="label">Custom URL</label>
          <input className="input" type="text" />
        </div>
        <div className="flex justify-center">
          <button className="button">Create Short URL</button>
        </div>
        <div className="flex justify-center ">
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortenUrl;
