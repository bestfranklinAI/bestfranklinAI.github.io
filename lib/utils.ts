import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Gets the correct image path for both local development and GitHub Pages deployment
 * @param imagePath Path to the image (should start with '/' for absolute paths)
 * @returns The correct path for the current environment
 */
export function getImagePath(imagePath: string): string {
  // If in development or the path already includes the base path, return as is
  if (process.env.NODE_ENV !== 'production' || !process.env.NEXT_PUBLIC_BASE_PATH) {
    return imagePath;
  }

  // For production with a base path, prefix the path but avoid double slashes
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const normalizedImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${basePath}${normalizedImagePath}`;
}
