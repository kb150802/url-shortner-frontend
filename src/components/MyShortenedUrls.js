import React, { useEffect, useState } from "react";

const MyShortenedUrls = ({fetchAllUrls, shortenedUrlsList}) => {

  useEffect(()=> {
    fetchAllUrls();
  }, [])

  return (
    <div className="flex flex-col wid-full mx-auto p-4 m-4 bg-white rounded shadow border border-gray-300">
       <div className="w- text-gray-700 m-auto bold">
        <h3><strong>My Shortened URLs</strong></h3>
       </div>
      {shortenedUrlsList?.map((shortendUrl) => {
        return (
          <div className="flex  items-center space-x-4 m-2">
            <label className="w-2/3 text-gray-700 m-auto">{shortendUrl.longUrl}</label>
            <input
              type="text"
              className="input"
              value={shortendUrl.shortUrl}
              disabled
            ></input>
          </div>
        );
      })}
    </div>
  );
};

export default MyShortenedUrls;
