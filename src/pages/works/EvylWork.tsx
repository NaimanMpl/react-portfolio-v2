import SonicQuote from '../../components/SonicQuote';
import WorkAnnotationContainer from '../../components/work/WorkAnnotationContainer';
import { CursorProvider } from '../../contexts/CursorContext';
import { getProject } from '../../projects';
import WorkAnnotationParagraph from '../../ui/WorkAnnotationParagraph';
import WorkAnnotationTitle from '../../ui/WorkAnnotationTitle';
import Work from './Work';

const EvylWork = () => {

  const work = getProject('Evyl')!;

  return (
    <CursorProvider>
      <Work
        title={work.name}
        background={work.background}
        description=''
        link={work.link}
        quote={
          <SonicQuote {...work.quote} />
        }
      >
        <WorkAnnotationContainer>
          <WorkAnnotationTitle id='work-subtitle'>
            Born to be the <span className='text-green-550'>Game Of The Year</span> forced to be in the Hall Of Fame
          </WorkAnnotationTitle>
          <WorkAnnotationParagraph id='work-description'>
            My first experience in writing a game engine in Java, who has been the reason of many sleepless night. This project is part of the Hall of Fame, a placed reserved to the best projects in my university.
          </WorkAnnotationParagraph>
        </WorkAnnotationContainer>
      </Work>
    </CursorProvider>
  )
}

export default EvylWork