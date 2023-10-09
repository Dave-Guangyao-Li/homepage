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

        <div className='text-center text-neutral-900 text-8xl leading-[120px]'>
          Transform Knowledge
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          distinctio neque repellat facere nemo reiciendis aliquid, accusamus,
          provident tempore ex laborum. Nihil porro, magnam dolore neque
          asperiores minima reprehenderit. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Voluptas dolore minima voluptatem eius
          deleniti nisi cupiditate, laborum porro alias, eos hic? Error eligendi
          magnam cum blanditiis ipsa tempora repudiandae quia. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Voluptatem distinctio
          veritatis, voluptate at autem numquam facilis, recusandae tempora,
          necessitatibus commodi sed temporibus dicta quidem libero rerum
          deserunt corrupti. Aspernatur, iste.
        </div>
      </div>
    </>
  )
}

export default App
