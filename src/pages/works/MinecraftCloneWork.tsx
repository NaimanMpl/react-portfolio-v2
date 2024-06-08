import SonicQuote from '../../components/SonicQuote';
import WorkAnnotationContainer from '../../components/work/WorkAnnotationContainer';
import { CursorProvider } from '../../contexts/CursorContext';
import { getProject } from '../../projects';
import WorkAnnotationParagraph from '../../ui/WorkAnnotationParagraph';
import WorkAnnotationTitle from '../../ui/WorkAnnotationTitle';
import Work from './Work';

const MinecraftCloneWork = () => {
  const work = getProject('Minecraft Clone')!;

  return (
    <CursorProvider>
      <Work 
        title={work.name} 
        description='A Minecraft Clone made with love' 
        background={work.background}
        link={work.link}
        quote={
          <SonicQuote {...work.quote} />
        }
      >
        <WorkAnnotationContainer>
          <WorkAnnotationTitle id='work-subtitle' className='max-w-2xl'>
            Let's go to a place where everything is made of <span className='text-green-550'>blocks</span>
          </WorkAnnotationTitle>
          <WorkAnnotationParagraph id='work-description' className='max-w-5xl'>
            One of the most striking aspects of the game is its visual aesthetics. Which makes Minecraft valuable despite being available for a decade, is that it never ages. It's not an experience that can be embellish by nostalgia over time but remains for each players, a piece of our simpler past. This forces respect and has been a constant source of motivation to implement this clone.
          </WorkAnnotationParagraph>
        </WorkAnnotationContainer>
      </Work>
    </CursorProvider>
  )
}

export default MinecraftCloneWork