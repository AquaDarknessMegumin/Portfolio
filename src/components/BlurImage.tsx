"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export function BlurImage({ className, alt, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      className={cn(
        "transition-all duration-700 ease-out",
        isLoaded ? "blur-0 scale-100" : "blur-md scale-95",
        className
      )}
      onLoad={() => setIsLoaded(true)}
      alt={alt || ""}
      {...props}
    />
  );
}
