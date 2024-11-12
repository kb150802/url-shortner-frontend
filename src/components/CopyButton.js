import React from "react";

const CopyButton = ({textToCopy})=>{
    return (
        <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `${textToCopy}`
                      )
                    }
                    className="ml-2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 
                             dark:hover:text-gray-200 transition-colors"
                    title="Copy shortened URL"
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
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  </button>
    )
}

export default CopyButton;