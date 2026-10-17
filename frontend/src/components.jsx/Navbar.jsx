import React from 'react'

const Navbar = () => {
  return (
    <>
      <section className='fixed top-0 left-0 w-full z-50 flex items-center justify-between py-3 px-24 bg-white max-md:px-14'>
        <span className="arimo-font ">Vy<span className='text-black'>ro</span></span>

        <ul className='flex items-center gap-12 text-[17px] max-[852px]:text-sm max-md:text-3 md:flex md:gap-7 sm:flex sm:gap-5 max-sm:gap-5 transition-all ease-in-out'>
          <p className='opacity-75'>How it works</p>
          <p className='opacity-75'>Popular deals</p>
          <p className='opacity-75'>Price alert</p>

          <span className='bg-[#1E90FF] text-white w-auto h-auto p-2 rounded-xl font-semibold'>
            <button>Compare a product</button>
          </span>
        </ul>

      </section>
      <hr className='border-gray-300 mt-[78px] fixed top-0 left-0 w-full z-50' />
    </>

  )
}

export default Navbar
