import React, { useEffect, useState } from "react";
import useShortener from "../hooks/useShortener";

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
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedUrl(null);
    setIsModalOpen(false);
    // Restore scrolling
    document.body.style.overflow = 'unset';
  };

  // Handle clicking outside modal to close
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

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
                      {`http://localhost:8080/${shortenedUrl.shortUrl}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedUrl && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleModalBackdropClick}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl 
                         transform transition-all duration-300 ease-in-out">
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
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg 
                             border border-gray-200 dark:border-gray-600">
                  <p className="flex-1 text-gray-800 dark:text-gray-200 break-all">
                    {selectedUrl.longUrl}
                  </p>
                  <button
                    onClick={() => navigator.clipboard.writeText(selectedUrl.longUrl)}
                    className="ml-2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 
                             dark:hover:text-gray-200 transition-colors"
                    title="Copy original URL"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Shortened URL Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Shortened URL
                </label>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg 
                             border border-gray-200 dark:border-gray-600">
                  <p className="flex-1 text-blue-600 dark:text-blue-400">
                    {`http://localhost:8080/${selectedUrl.shortUrl}`}
                  </p>
                  <button
                    onClick={() => navigator.clipboard.writeText(`http://localhost:8080/${selectedUrl.shortUrl}`)}
                    className="ml-2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 
                             dark:hover:text-gray-200 transition-colors"
                    title="Copy shortened URL"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
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
      )}
    </div>
  );
};

export default MyShortenedUrls;