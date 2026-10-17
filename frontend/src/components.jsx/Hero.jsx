import React from 'react'
import DeviceChart from './DeviceChart'

const Hero = () => {
    return (
        <>
            <section className='w-full flex max-sm:flex-col py-6 px-24 mt-6 gap-16 max-md:gap-8 max-md:px-10 max-sm:px-5 max-sm:gap-4'>
                {/* Left aside */}
                <div className='w-1/2 flex flex-col gap-4 max-sm:w-full'>

                    <h1 className='arimo text-[58px] leading-tight max-[1115px]:text-[52px] max-lg:text-5xl max-md:text-4xl max-md:text-pretty max-sm:text-[30px] transition-all ease-in-out'>
                        Find the lowest price before you buy
                    </h1>

                    <p className='text-xl opacity-60 max-lg:text-lg max-md:text-sm transition-all ease-in-out'>Paste a product link. We compare every store, show the price history and tell you whether to buy now or wait.</p>

                    <form className='flex border border-gray-300 p-2 rounded-lg shadow-lg w-full transition-all ease-in-out'>
                        <input className='w-full min-w-0 px-2 text-base max-md:text-sm max-sm:text-xs outline-none' type="text" placeholder='Paste an Amazon, Flipkart or Croma link' />

                        <button className='bg-[#1E90FF] whitespace-nowrap px-5 py-2.5 text-white rounded-xl font-semibold text-sm max-sm:px-3 max-sm:text-xs transition-all ease-in-out'>Compare prices</button>
                    </form>

                </div>

                {/* Right aside — hidden on mobile */}
                <div className='w-5/12 mt-10 max-md:mt-4 max-sm:hidden'>
                    <DeviceChart />
                </div>
            </section>

            {/* Work with */}

            <div className='w-full flex flex-wrap items-center py-3 px-24 my-5 max-sm:my-1 max-sm:px-5 gap-3 max-lg:text-sm max-md:text-xs max-md:px-8'>
                <span className='opacity-75'>Work With</span>
                <span className='w-auto border bg-[#F6F9FC] p-1 px-4 rounded-2xl flex justify-center max-lg:px-2'>Amazon</span>
                <span className='w-auto border bg-[#F6F9FC] p-1 px-4 rounded-2xl flex justify-center max-lg:px-2'>Flipkart</span>
                <span className='w-auto border bg-[#F6F9FC] p-1 px-4 rounded-2xl flex justify-center max-lg:px-2'>Croma</span>
                <span className='w-auto border bg-[#F6F9FC] p-1 px-4  rounded-2xl flex justify-center max-lg:px-2'>Reliance Digital</span>
            </div>
        </>
    )
}

export default Hero
