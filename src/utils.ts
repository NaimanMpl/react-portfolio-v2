import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import evylBg from './assets/evyl.png';
import minecraftBg from './assets/minecraft_bg.jpg';
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

export const getWorkBackground = (title: string): string => {
  switch (title) {
    case 'Minecraft Clone':
      return minecraftBg;
    case 'Evyl':
      return evylBg;
    default:
      return minecraftBg;
  }
}