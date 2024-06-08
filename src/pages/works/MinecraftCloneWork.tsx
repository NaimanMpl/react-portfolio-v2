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
          <WorkAnnotationTitle id='work-subtitle'>
            Let's go to a place where everything is made of <span className='text-green-550'>blocks</span>
          </WorkAnnotationTitle>
          <WorkAnnotationParagraph id='work-description' className='max-w-2xl'>
            One of the most striking aspects of the game is its visual aesthetics. What makes Minecraft valuable despite being a decade old is that it never ages. It doesn’t become an experience that our imagination embellishes over time but remains, for each player, a piece of our simpler past. This forces respect and has been a constant source of motivation to implement this clone.
          </WorkAnnotationParagraph>
        </WorkAnnotationContainer>
      </Work>
    </CursorProvider>
  )
}

export default MinecraftCloneWork