import evylBg from './assets/evyl.png';
import minecraftImg1 from './assets/minecraftclone-1.png';
import minecraftImg2 from './assets/minecraftclone-2.png';
import minecraftImg3 from './assets/minecraftclone-3.png';
import minecraftBg from './assets/minecraftclonebg.png';

interface Project {
  name: string,
  description: string,
  path: string,
  background: string,
  images: string[]
}

const projects: Project[] = [
  {
    name: 'Minecraft Clone',
    description: 'A Minecraft Clone made with love',
    path: '/works/minecraft-clone',
    background: minecraftBg,
    images: [ minecraftImg1, minecraftImg2, minecraftImg3 ]
  },
  {
    name: 'Evyl',
    path: '/works/evyl',
    description: 'A 2D Java Adventure game',
    background: evylBg,
    images: []
  }
]

export const getProject = (name: string) => {
  return projects.find((project) => project.name === name);
}

export default projects;