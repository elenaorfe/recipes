import React from "react";

const RecipeSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
        >
          <div className="flex gap-4 p-4">
            <div className="flex flex-col gap-2 grow justify-between">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="bg-gray-200 rounded-full w-18 h-18"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeSkeleton;
