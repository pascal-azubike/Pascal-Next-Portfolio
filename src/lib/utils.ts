import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// used to merge css classes

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


