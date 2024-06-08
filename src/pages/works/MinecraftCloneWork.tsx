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
          <WorkAnnotationParagraph id='work-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quia enim esse dolor aspernatur soluta eius possimus, nam commodi!
          </WorkAnnotationParagraph>
        </WorkAnnotationContainer>
      </Work>
    </CursorProvider>
  )
}

export default MinecraftCloneWork