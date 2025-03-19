import React from "react";

// Platform map with colors, icons, and names
const platforms = {
  youtube: { name: "YouTube", color: "bg-red-600", icon: "📺" },
  facebook: { name: "Facebook", color: "bg-blue-600", icon: "📘" },
  instagram: { name: "Instagram", color: "bg-pink-600", icon: "📸" },
};

const LeftMain = ({ linksList }) => {
  return (
    <div className="leftmain flex flex-col items-center justify-center w-1/2 h-screen bg-gray-200 p-6">
      {/* Phone Frame */}
      <div className="relative bg-white rounded-3xl shadow-lg w-[375px] h-[700px] p-6">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gray-900 rounded-t-3xl px-4 flex items-center justify-between">
          <div className="text-white text-sm">Signal</div>
          <div className="text-white text-sm">100%</div>
        </div>

        {/* Profile Circle */}
        <div className="flex justify-center items-center mt-24">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        </div>

        {/* Links Section Below Profile */}
        <div className="mt-6 flex flex-col items-center space-y-3">
          {linksList.map((item, index) => (
            <a
              key={index}
              href={item.url} // Open the actual URL
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-3 rounded-lg shadow-md ${platforms[item.platform]?.color || "bg-gray-600"} w-full mt-2 cursor-pointer`}
            >
              <span className="mr-3 text-white text-xl">{platforms[item.platform]?.icon || "🔗"}</span>
              <span className="text-white">{platforms[item.platform]?.name || "Link"}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftMain;
