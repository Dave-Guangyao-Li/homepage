import './App.css'

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
      </div>
    </>
  )
}

export default App
