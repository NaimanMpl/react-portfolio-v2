import evylImg2 from './assets/evyl-2.png';
import evylImg3 from './assets/evyl-3.png';
import { default as evylBg, default as evylImg1 } from './assets/evyl.png';
import minecraftImg1 from './assets/minecraftclone-1.webp';
import minecraftImg2 from './assets/minecraftclone-2.png';
import minecraftImg3 from './assets/minecraftclone-3.jpeg';
import minecraftBg from './assets/minecraftclonebg.png';
import sonicBg1 from './assets/sonic-bg-1.webp';
import sonic2006bg from './assets/sonic-bg-2006-2.webp';

interface SonicQuote {
  background: string,
  description: string,
  game: string,
  quote: string
}

interface Project {
  name: string,
  description: string,
  path: string,
  background: string,
  link: string | null,
  images: string[],
  quote: SonicQuote
}

const projects: Project[] = [
  {
    name: 'Minecraft Clone',
    description: 'A Minecraft Clone made with love',
    path: '/works/minecraft-clone',
    background: minecraftBg,
    images: [ minecraftImg1, minecraftImg2, minecraftImg3 ],
    link: 'https://github.com/NaimanMpl/Minecraft_Clone',
    quote: {
      background: sonic2006bg,
      description: 'This quote is from the 2006 game Sonic the Hedgehog. Sonic says this to Princess Elise, encouraging her to take decisive action instead of being paralyzed by worry. By stating "nothing starts until you take action" and "if you have time to worry, then run," Sonic motivates her to be proactive and turn her concerns into forward momentum.',
      game: 'Sonic 2006',
      quote: 'Nothing starts until you take action. If you have time to worry, then run.'
    }
  },
  {
    name: 'Evyl',
    path: '/works/evyl',
    description: 'A 2D Java Adventure game',
    background: evylBg,
    images: [evylImg1, evylImg2, evylImg3],
    link: null,
    quote: {
      background: sonicBg1,
      description: "A quote from my favorite Sonic game. Sonic is talking to Chip, a small amnesiac creature. Chip, intrigued by Sonic's altruism, asked him why he is helping him. Sonic, true to his kind and loyal character, simply responds that he doesn't need a reason to help a friend.",
      game: 'Sonic Unleashed',
      quote: 'Do I need a reason to want to help out a friend?'
    }
  }
]

export const getProject = (name: string) => {
  return projects.find((project) => project.name === name);
}

export const getProjectByIndex = (index: number) => {
  return projects[index];
}

export default projects;