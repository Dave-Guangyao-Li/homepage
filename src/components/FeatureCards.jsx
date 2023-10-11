const FeatureCards = () => {
  return (
    <>
      <div className='grid grid-cols-2 grid-rows-2 gap-4'>
        <div className='w-96 h-96 bg-gray-200 rounded-3xl flex flex-col'>
          <div className="w-96 opacity-95 text-neutral-800 text-3xl font-bold font-['Creato Display'] leading-10 tracking-wide">
            Content Creation
          </div>
          <div className="w-96 h-28 text-gray-700 text-2xl font-normal font-['Creato Display'] leading-10 tracking-wide">
            Evolve your narrative. Tools tailored for visionary storytelling.
            From inspiration to impression.
          </div>
          <div className='w-96 h-96 bg-zinc-100 rounded-md' />
          <div className='flex items-center justify-between'>
            <img
              className='w-14 h-14 rounded-full border'
              src='https://via.placeholder.com/60x60'
            />
            <div className="w-96 h-20 text-slate-500 text-xl font-normal font-['Creato Display'] leading-7 tracking-wide">
              “It turns vast information into concise, captivating narratives
              effortlessly.”
            </div>
          </div>
        </div>
        <div className='w-96 h-96 bg-gray-200 rounded-3xl flex flex-col'>
          <div className="w-96 opacity-95 text-neutral-800 text-3xl font-bold font-['Creato Display'] leading-10 tracking-wide">
            Research Synthesizing
          </div>
          <div className="w-96 h-28 text-gray-700 text-2xl font-normal font-['Creato Display'] leading-10 tracking-wide">
            Collate, create, and conquer your studies into academic gems.
          </div>
          <div className='flex items-center justify-between'>
            <img
              className='w-14 h-14 rounded-full border'
              src='https://via.placeholder.com/60x60'
            />
            <div className="w-96 h-20 text-slate-500 text-xl font-normal font-['Creato Display'] leading-7 tracking-wide">
              “It turns vast information into concise, captivating narratives
              effortlessly.”
            </div>
          </div>
        </div>
        <div className='w-96 h-96 bg-gray-200 rounded-3xl flex flex-col'>
          <div className="w-96 opacity-95 text-neutral-800 text-3xl font-bold font-['Creato Display'] leading-10 tracking-wide">
            Self Learning
          </div>
          <div className="w-96 h-28 text-gray-700 text-2xl font-normal font-['Creato Display'] leading-10 tracking-wide">
            Nurture your passion into digestible knowledge. Curiosity is all you
            need to start.
          </div>
          <div className='flex items-center justify-between'>
            <img
              className='w-14 h-14 rounded-full border'
              src='https://via.placeholder.com/60x60'
            />
            <div className="w-96 h-20 text-slate-500 text-xl font-normal font-['Creato Display'] leading-7 tracking-wide">
              “It turns vast information into concise, captivating narratives
              effortlessly.”
            </div>
          </div>
        </div>
        <div className='w-96 h-96 bg-gray-200 rounded-3xl flex flex-col'>
          <div className="w-96 opacity-95 text-neutral-800 text-3xl font-bold font-['Creato Display'] leading-10 tracking-wide">
            Lecture Design
          </div>
          <div className="w-96 h-28 text-gray-700 text-2xl font-normal font-['Creato Display'] leading-10 tracking-wide">
            Illuminate minds with brilliant materials. Engage with every slide,
            script and session.
          </div>
          <div className='flex items-center justify-between'>
            <img
              className='w-14 h-14 rounded-full border'
              src='https://via.placeholder.com/60x60'
            />
            <div className="w-96 h-20 text-slate-500 text-xl font-normal font-['Creato Display'] leading-7 tracking-wide">
              “It turns vast information into concise, captivating narratives
              effortlessly.”
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureCards
