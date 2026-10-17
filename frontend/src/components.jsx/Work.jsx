import React from 'react'

const Work = () => {
  return (
    <>
      <section className='bg-[#F6F9FC] w-full py-5 px-24 mb-5 flex flex-col gap-4 max-lg:gap-2 max-lg:mb-2 max-md:px-14'>
        <span className='arimo text-[#18202a] text-3xl'>How it works</span>
        <p className='opacity-80 text-[17px]'>From link to decision in three steps.</p>

        <div className='w-full flex gap-24 max-lg:flex-col max-lg:gap-6'>
          <div className='w-[340px] max-lg:w-fit max-lg:h-auto max-lg:p-5 max-lg:gap-1 h-52 border rounded-2xl border-gray-300 flex flex-col p-8 gap-3 bg-white'>

            <span className='size-10 bg-[#1E90FF] text-white font-bold rounded-lg flex items-center justify-center'>1</span>

            <div className='arimo text-[#18202a] font-bold text-xl max-lg:text-lg'>Paste a link</div>

            <p className='opacity-65 max-lg:text-base'>Copy the product page link from any supported store and paste it above.</p>
          </div>

          <div className='w-[340px] max-lg:w-fit max-lg:h-auto max-lg:p-5 max-lg:gap-1 h-52 border rounded-2xl border-gray-300 flex flex-col p-8 gap-3 bg-white'>

            <span className='size-10 bg-[#1E90FF] text-white font-bold rounded-lg flex items-center justify-center'>2</span>

            <div className='arimo text-[#18202a] font-bold text-xl'>Paste a link</div>

            <p className='opacity-65'>Copy the product page link from any supported store and paste it above.</p>
          </div>

          <div className='w-[340px] max-lg:w-fit max-lg:h-auto max-lg:p-5 max-lg:gap-1 h-52 border rounded-2xl border-gray-300 flex flex-col p-8 gap-3 bg-white'>

            <span className='size-10 bg-[#1E90FF] text-white font-bold rounded-lg flex items-center justify-center'>3</span>

            <div className='arimo text-[#18202a] font-bold text-xl'>Paste a link</div>
            
            <p className='opacity-65'>Copy the product page link from any supported store and paste it above.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
