import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateTimeToRead(text: string): number {
  const wordsPerMinute = 265
  const numberOfWords = text.trim().split(/\s+/).length

  const time = Math.ceil(numberOfWords / wordsPerMinute)
  return time
}
