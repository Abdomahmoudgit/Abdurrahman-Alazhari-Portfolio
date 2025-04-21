"use client";

import { useState } from "react";
import { BlinkBlur } from "react-loading-indicators";

const LazyImage = ({ src, alt, className = "", ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex justify-center items-center bg-black z-10">
          <BlinkBlur color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};

export default LazyImage;
