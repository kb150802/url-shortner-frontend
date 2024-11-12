import React from "react";
import CopyButton from "./CopyButton";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const ShortUrlModal = ({selectedUrl, closeModal, })=>{
    const handleModalBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      };
    return (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleModalBackdropClick}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl 
                         transform transition-all duration-300 ease-in-out"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                URL Details
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300
                         transition duration-150"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Original URL Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Original URL
                </label>
                <div
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg 
                             border border-gray-200 dark:border-gray-600"
                >
                  <p className="flex-1 text-gray-800 dark:text-gray-200 break-all">
                    {selectedUrl.longUrl}
                  </p>
                  <CopyButton textToCopy={selectedUrl.longUrl}/>
                </div>
              </div>

              {/* Shortened URL Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Shortened URL
                </label>
                <div
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg 
                             border border-gray-200 dark:border-gray-600"
                >
                  <p className="flex-1 text-blue-600 dark:text-blue-400">
                    <a
                      href={`${API_BASE_URL}/${selectedUrl.shortUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 truncate"
                    >
                      {`${API_BASE_URL}/${selectedUrl.shortUrl}`}
                    </a>
                  </p>
                  <CopyButton textToCopy={`${API_BASE_URL}/${selectedUrl.shortUrl}`}/>
                </div>
              </div>

              {/* QR Code Placeholder (Optional) */}
              {/* <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 
                           dark:border-gray-600 text-center text-gray-500 dark:text-gray-400">
                QR Code could be added here
              </div> */}
            </div>
          </div>
        </div>
    )
}
export default ShortUrlModal;