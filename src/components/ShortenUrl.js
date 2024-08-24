import React from "react";
import useLogin from "../hooks/useLogin";
import useShortener from "../hooks/useShortener";

const ShortenUrl = ({ handleLogout }) => {
  const { shortenUrl, longUrl, setLongUrl, customUrl, setCustomUrl } =
    useShortener();

  return (
    <div className="flex flex-col max-w-md mx-auto p-4 m-4 bg-white rounded shadow border border-gray-300">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <label className="label">Link</label>
          <input
            className="input"
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="label">Custom URL</label>
          <input
            className="input"
            type="text"
            value={customUrl}
            onChange={e => setCustomUrl(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button className="button" onClick={shortenUrl}>Create Short URL</button>
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
