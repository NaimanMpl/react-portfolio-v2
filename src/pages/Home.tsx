import globeIcon from '../assets/globe.svg';
import Header from '../components/Header';
import HorizontalBar from '../components/HorizontalBar';
import Globe from '../ui/Globe';
import PageTitle from '../ui/PageTitle';

const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        <Header />
        <section className='px-header'>
          <div className='mt-52 flex flex-col items-center'>
            <span className='text-gray font-medium pb-6'>Naïman's Porfolio</span>
            <PageTitle color='text-black'>Hello, World! My name is Naïman a Software Developer</PageTitle>
          </div>
          <div className='mt-52 relative flex justify-end pr-24'>
            <HorizontalBar className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full' color='bg-gray' />
            <div className='bg-primary p-14 rounded-full w-40 h-40 z-50'>
              <Globe />
            </div>
          </div>
        </section>
        <p className='font-medium absolute bottom-8 left-1/2 -translate-x-1/2'>Scroll for more</p>
      </div>
    </>
  )
}

export default Home