"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;  // Add this line
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  fill, 
  width, 
  height,
  priority  // Add this line
}: OptimizedImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      priority={priority}  // Add this line
      className={`
        duration-700 ease-in-out
        ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        ${className}
      `}
      onLoadingComplete={() => setLoading(false)}
      loading={priority ? undefined : "lazy"}
      quality={75}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};