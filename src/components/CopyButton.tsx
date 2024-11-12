import React, { useState } from "react";


const CopyButton = ({ textToCopy}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setShowTooltip(true);

    // Hide the tooltip after 2 seconds
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleCopy}
        className="ml-2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 
                   dark:hover:text-gray-200 transition-colors"
        title="Copy URL"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002-2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1
                     text-sm text-white bg-gray-800 rounded shadow-lg z-10"
        >
          Copied!
        </div>
      )}
    </div>
  );
};

export default CopyButton;