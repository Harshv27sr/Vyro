import React from 'react'

const About = () => {
  return (
    <>
      <section className='w-full flex py-3 px-24 my-5 gap-24 max-lg:gap-6 max-md:px-14'>
        <div className='flex flex-col border w-64 h-auto p-4 bg-[#DCEBFA] rounded-lg max-lg:h-24 transition-all ease-in-out'>
            <span className='text-xl font-bold max-lg:text-lg'>4 stores</span>
            <p className='opacity-85 max-lg:text-sm'>Compared in one table</p>
        </div>

        <div className='flex flex-col border w-64 h-auto p-4 bg-[#DCEBFA] rounded-lg max-lg:h-24 transition-all ease-in-out'>
            <span className='text-xl font-bold max-lg:text-lg'>90 days</span>
            <p className='opacity-85 max-lg:text-sm'>Of price history</p>
        </div>

        <div className='flex flex-col border w-64 h-auto p-4 bg-[#DCEBFA] rounded-lg max-lg:h-24 transition-all ease-in-out'>
            <span className='text-xl font-bold max-lg:text-lg'>Prediction</span>
            <p className='opacity-85 max-lg:text-sm'>When prices may change</p>
        </div>

        <div className='flex flex-col border w-64 h-auto p-4 bg-[#DCEBFA] rounded-lg max-lg:h-24 transition-all ease-in-out'>
            <span className='text-xl font-bold max-lg:text-lg'>Free alerts</span>
            <p className='opacity-85 max-lg:text-sm'>Emailed at your target</p>
        </div>
      </section><hr className='border-gray-300'/>
    </>
  )
}

export default About
