import React from "react";
import useShortener from "../hooks/useShortener";

const ShortenUrl = ({ handleLogout }) => {
  const { shortenUrl, longUrl, setLongUrl, customUrl, setCustomUrl } = useShortener();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center space-x-2">
            {/* Link Icon */}
            <svg 
              className="w-6 h-6 text-blue-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
              />
            </svg>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Create a Short URL
            </h1>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Long URL Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Long URL
            </label>
            <input
              type="text"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Enter your long URL here"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                       placeholder-gray-400 dark:placeholder-gray-500
                       transition duration-200"
            />
          </div>

          {/* Custom URL Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Custom Short URL (optional)
            </label>
            <div className="flex items-center">
              <span className="inline-flex items-center px-4 py-2 rounded-l-lg border border-r-0 border-gray-300 
                           dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 
                           text-sm">
                localhost:8080/
              </span>
              <input
                type="text"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="custom-path"
                className="flex-1 px-4 py-2 rounded-r-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                         placeholder-gray-400 dark:placeholder-gray-500
                         transition duration-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={shortenUrl}
            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 hover:bg-blue-700 
                     rounded-lg font-medium transition duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed
                     flex items-center justify-center space-x-2"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
              />
            </svg>
            <span>Create Short URL</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortenUrl;