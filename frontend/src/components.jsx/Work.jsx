import React from 'react'

const Work = () => {
  return (
    <>
      <section className='bg-[#F6F9FC] w-full py-8 px-24 mb-5 flex flex-col gap-6 max-md:px-10 max-sm:px-5 max-sm:pb-4'>
        <div>
          <h2 className='arimo text-[#18202a] text-3xl max-sm:text-2xl'>How it works</h2>
          <p className='opacity-80 text-[17px] mt-1 max-sm:text-sm'>From link to decision in three steps.</p>
        </div>

        <div className='w-full flex flex-wrap gap-6'>
          <div className='flex-1 min-w-[260px] border rounded-2xl border-gray-300 flex flex-col p-8 gap-3 bg-white max-sm:p-5'>

            <span className='size-10 bg-[#1E90FF] text-white font-bold rounded-lg flex items-center justify-center'>1</span>

            <div className='arimo text-[#18202a] font-bold text-xl'>Paste a link</div>

            <p className='opacity-65'>Copy the product page link from any supported store and paste it above.</p>
          </div>

          <div className='flex-1 min-w-[260px] border rounded-2xl border-gray-300 flex flex-col p-8 gap-3 bg-white max-sm:p-5'>

            <span className='size-10 bg-[#1E90FF] text-white font-bold rounded-lg flex items-center justify-center'>2</span>

            <div className='arimo text-[#18202a] font-bold text-xl'>Compare prices</div>

            <p className='opacity-65'>See the price, MRP and discount on every platform, with the cheapest one highlighted.</p>
          </div>

          <div className='flex-1 min-w-[260px] border rounded-2xl border-gray-300 flex flex-col p-8 gap-3 bg-white max-sm:p-5'>

            <span className='size-10 bg-[#1E90FF] text-white font-bold rounded-lg flex items-center justify-center'>3</span>

            <div className='arimo text-[#18202a] font-bold text-xl'>Buy at the right time</div>
            
            <p className='opacity-65'>Read the price history and prediction, or let us email you when the price drops.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
