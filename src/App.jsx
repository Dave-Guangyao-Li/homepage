import './App.css'
import Footer from './components/Footer'
import PricingPlans from './components/PricingPlans'
function App() {
  return (
    <>
      <div className='background w-full relative bg-zinc-100'>
        <div className='fixed nav-bar w-full h-12 bg-neutral-800 text-zinc-100 text-sm flex justify-center items-center p-4'>
          <div className='flex-grow'></div> {/* Empty space-filling div */}
          <div className='menu-items flex gap-5 justify-center'>
            <span className='px-6 py-2'>Feature</span>
            <span className='px-6 py-2'>Use Case</span>
            <span className='px-6 py-2'>Testimonial</span>
            <span className='px-6 py-2'>Pricing</span>
          </div>
          <div className='flex-grow'></div> {/* Empty space-filling div */}
          <div className='get-start-btn mr-14 bg-indigo-500 rounded-lg flex justify-center items-center px-4 py-2'>
            <span>Get Started</span>
          </div>
        </div>

        <div className='intro-section flex flex-col justify-center items-center gap-4'>
          <div className='text-center text-neutral-900 text-8xl leading-[120px] pt-32'>
            Transform Knowledge
          </div>

          <div className='w-80 h-16 bg-white rounded-2xl border border-red-400 flex items-center'>
            <img
              className='w-12 h-12 ml-4'
              src='https://via.placeholder.com/328x73'
            />
            <div className='ml-4 flex flex-col'>
              <div className="w-28 h-5 text-red-400 text-xs font-extrabold font-['Creato Display'] leading-loose tracking-tight">
                PRODUCT HUNT
              </div>
              <div className="w-52 h-8 text-red-400 text-xl font-bold font-['Creato Display'] leading-10 tracking-tight">
                #3 Product of the Day
              </div>
            </div>
          </div>
          <div className='w-96 h-14 text-center text-neutral-900 text-3xl leading-10 tracking-wide'>
            Refine the Raw by AI
          </div>
          <div className='text-center'>
            <span className='text-gray-700 text-xl font-normal leading-loose tracking-wide'>
              Transform fragmented information or curiosity <br /> sparkles into
            </span>
            <span className='text-gray-700 text-xl font-bold leading-loose tracking-wide'>
              {' '}
              ready-to-use content
            </span>
            <span className='text-gray-700 text-xl font-normal leading-loose tracking-wide'>
              .
            </span>
          </div>
        </div>
        <div className='mt-[12rem] flex flex-col justify-center items-center'>
          <div className="w-[70rem] h-28 text-center text-zinc-900 text-7xl font-medium font-['Creato Display'] leading-10 px-4 py-2">
            Multifaceted Outputs
          </div>
          <div className='w-[46rem] text-center'>
            <span className="text-neutral-800 text-xl font-normal font-['Creato Display'] leading-loose tracking-wide">
              Showcase your ideas across diverse formats, ensuring each piece of{' '}
            </span>
            <span className="text-neutral-800 text-xl font-bold font-['Creato Display'] leading-loose tracking-wide">
              knowledge
            </span>
            <span className="text-neutral-800 text-xl font-normal font-['Creato Display'] leading-loose tracking-wide">
              {' '}
              shines in its{' '}
            </span>
            <span className="text-neutral-800 text-xl font-bold font-['Creato Display'] leading-loose tracking-wide">
              best light
            </span>
            <span className="text-neutral-800 text-xl font-normal font-['Creato Display'] leading-loose tracking-wide">
              .
            </span>
          </div>
          <div className='w-full h-96 flex justify-evenly items-center bg-indigo-100 text-center mt-[6rem]'>
            <div className='flex flex-col justify-center items-center w-1/3 h-full gap-10'>
              <img
                className='w-48 h-48'
                src='https://via.placeholder.com/328x73'
              />
              <div className="text-center text-gray-700 text-4xl font-medium font-['Creato Display'] leading-10 tracking-wide">
                Script
              </div>
            </div>
            <div className='flex flex-col border-r-2 border-l-2 border-slate-300 justify-center items-center w-1/3 h-full gap-10'>
              <img
                className='w-48 h-48'
                src='https://via.placeholder.com/328x73'
              />
              <div className="text-center text-gray-700 text-4xl font-medium font-['Creato Display'] leading-10 tracking-wide">
                Slides
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-1/3 h-full gap-10'>
              <img
                className='w-48 h-48'
                src='https://via.placeholder.com/328x73'
              />
              <div className="text-center text-gray-700 text-4xl font-medium font-['Creato Display'] leading-10 tracking-wide">
                Video
              </div>
            </div>
          </div>
        </div>
        <PricingPlans />
        <Footer />
      </div>
    </>
  )
}

export default App
