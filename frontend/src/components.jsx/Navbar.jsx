import React from 'react'

const Navbar = () => {
  return (
    <>
      <section className='fixed top-0 left-0 w-full z-50 bg-white'>
        <div className='flex flex-wrap items-center justify-between py-3 px-24 max-md:px-8 max-sm:px-5 gap-y-2'>

          <span className="arimo-font">Vy<span className='text-black'>ro</span></span>

          <ul className='flex flex-wrap items-center gap-8 text-[16px] max-[852px]:gap-5 max-md:gap-4 max-sm:gap-3 max-sm:text-sm list-none'>
            <li className='opacity-75'>How it works</li>
            <li className='opacity-75'>Popular deals</li>
            <li className='opacity-75'>Price alert</li>
            <li>
              <span className='bg-[#1E90FF] text-white px-4 py-2 rounded-xl font-semibold text-sm max-sm:px-3 max-sm:py-1.5 max-sm:text-xs'>
                Compare a product
              </span>
            </li>
          </ul>

        </div>
        <hr className='border-gray-300' />
      </section>
      <div className='h-[60px]'></div>
    </>
  )
}

export default Navbar
