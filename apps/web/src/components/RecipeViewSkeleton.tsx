import React from "react";

const RecipeViewSkeleton: React.FC = () => {
  return (
    <>
      <div className="w-48 h-48 bg-gray-200 mx-auto rounded" />
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>

          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-3"></div>
            <div className="space-y-2">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="h-4 bg-gray-200 rounded w-full"
                ></div>
              ))}
            </div>
          </div>

          <div>
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-3"></div>
            <div className="space-y-2">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="h-4 bg-gray-200 rounded w-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeViewSkeleton;
