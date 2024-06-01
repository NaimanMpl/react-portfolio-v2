import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WorkCardData, Works } from "./contexts/WorkCardContext";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getWork = (works: Works, title: string): WorkCardData => {
  switch (title) {
    case 'Minecraft Clone':
      return works.minecraftclone;
    default:
      return works.minecraftclone;
  }
}