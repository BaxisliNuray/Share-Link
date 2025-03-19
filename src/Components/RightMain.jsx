import React, { useState } from "react";

// Platform map for dropdown options
const platforms = {
  youtube: { name: "YouTube", color: "bg-red-600", icon: "📺" },
  facebook: { name: "Facebook", color: "bg-blue-600", icon: "📘" },
  instagram: { name: "Instagram", color: "bg-pink-600", icon: "📸" },
};

const RightMain = ({ addLink }) => {
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState("youtube");

  const handleAddLink = () => {
    if (link) {
      // Pass both the platform and actual URL to LeftMain
      addLink({
        platform,
        url: link, // Store the actual URL
      });
    }
    setLink(""); // Reset input after adding
  };

  return (
    <div className="rightmain w-1/2 h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold mb-6">Add Link</h2>

      {/* Platform Selection */}
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
      >
        {Object.keys(platforms).map((platformKey) => (
          <option key={platformKey} value={platformKey}>
            {platforms[platformKey].name}
          </option>
        ))}
      </select>

      {/* Link Input */}
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enter link URL"
        className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
      />

      {/* Add Link Button */}
      <button
        onClick={handleAddLink}
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add Link
      </button>
    </div>
  );
};

export default RightMain;
