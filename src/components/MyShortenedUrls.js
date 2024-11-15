import React, { useEffect, useState } from "react";
import useShortener from "../hooks/useShortener";
import ShortUrlModal from "./ShortUrlModal";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const MyShortenedUrls = () => {
  const { fetchAllUrls, shortenedUrlsList } = useShortener();
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAllUrls();
  }, []);

  const openModal = (url) => {
    setSelectedUrl(url);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedUrl(null);
    setIsModalOpen(false);
    // Restore scrolling
    document.body.style.overflow = "unset";
  };

  // Handle clicking outside modal to close

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-blue-500"
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
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              My Shortened URLs
            </h1>
          </div>
        </div>

        {/* URL List */}
        <div className="p-6">
          {shortenedUrlsList?.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No shortened URLs yet. Create one to get started!
            </div>
          ) : (
            <div className="space-y-4">
              {shortenedUrlsList?.map((shortenedUrl) => (
                <div
                  key={shortenedUrl.shortUrl}
                  onClick={() => openModal(shortenedUrl)}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 
                           bg-gray-50 dark:bg-gray-700/50 rounded-lg 
                           border border-gray-200 dark:border-gray-600
                           hover:border-blue-500 dark:hover:border-blue-400
                           hover:shadow-md cursor-pointer
                           transition duration-200"
                >
                  {/* Original URL */}
                  <div className="flex-1 min-w-0">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Original URL
                    </label>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {shortenedUrl.longUrl}
                    </p>
                  </div>

                  {/* Shortened URL */}
                  <div className="flex-shrink-0 w-full sm:w-auto">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Shortened URL
                    </label>
                    <p className="text-sm text-blue-600 dark:text-blue-400 truncate">
                      {`${API_BASE_URL}/${shortenedUrl.shortUrl}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* QR Code Placeholder (Optional) */}
        <div
          className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 
                           dark:border-gray-600 text-center text-gray-500 dark:text-gray-400"
        >
          QR Code could be added here
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedUrl && (
        <ShortUrlModal closeModal={closeModal} selectedUrl={selectedUrl} />
      )}
    </div>
  );
};

export default MyShortenedUrls;
