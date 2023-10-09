import React from 'react'

const PricingPlans = () => {
  return (
    <div className='mt-[12rem] flex flex-col justify-center items-center'>
      <div className="w-[60rem] h-56 text-center text-zinc-900 text-7xl font-medium font-['Creato Display'] leading-[6.25rem]">
        Turning your knowledge <br />
        into stories worth sharing.{' '}
      </div>
      <div className='w-56 h-14 px-8 py-1 bg-gradient-to-b from-blue-950 to-slate-950 rounded-lg shadow border border-blue-700 flex-col justify-center items-center gap-2.5 inline-flex'>
        <div className="w-40 h-14 text-center text-zinc-100 text-xl font-medium font-['Creato Display'] capitalize leading-10 tracking-wide">
          Dive in Today
        </div>
      </div>
    </div>
  )
}

export default PricingPlans
