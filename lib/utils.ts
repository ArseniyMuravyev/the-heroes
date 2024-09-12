import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatForLink(name: string) {
  return name
    .split(" ")
    .map((item) => item[0].toLowerCase() + item.slice(1))
    .join("-");
}

export function formatFromLink(name: string) {
  return name
    .split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}
