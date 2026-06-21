import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  srcSet?: string;
  loading?: "eager" | "lazy";
}

const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  srcSet,
  loading = "lazy",
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 border-2 border-dashed rounded-xl ${className}`}
        aria-label={alt}
      >
        <div className="flex items-center justify-center h-full p-4 text-gray-500">
          Image not available
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      srcSet={srcSet}
      loading={loading}
      onError={handleError}
    />
  );
};

export default ImageComponent;
