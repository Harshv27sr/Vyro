import React from 'react'
import ProductCards from './ProductCards'

const PopularDeals = () => {
  return (
    <>
      <section className='bg-[#F6F9FC] w-full py-3 px-24 my-5 flex flex-col gap-4 max-md:px-14 max-sm:gap-2 max-sm:mt-1'>
        <span className='arimo text-[#18202a] text-3xl'>Popular deals</span>
        <p className='opacity-80 text-[17px]'>Products people are checking today.</p>

        <ProductCards />

      </section>
    </>
  )
}

export default PopularDeals
