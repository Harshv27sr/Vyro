import React from 'react'
import DeviceChart from './DeviceChart'

const Hero = () => {
    return (
        <>
            <section className='w-full flex max-sm:flex-col py-3 px-24 mt-8 gap-24 max-md:gap-10 max-md:px-8 max-sm:px-5 max-sm:gap-6'>
                {/* Left aside */}
                <div className='w-2/4 flex flex-col gap-3 max-sm:w-full'>

                    <div className='arimo text-[58px] leading-tight max-[1115px]:text-[54px] max-lg:text-5xl max-md:text-4xl max-md:text-pretty max-sm:text-[32px] transition-all ease-in-out'>
                        Find the lowest price before you buy
                    </div>

                    <p className='text-xl opacity-60 max-lg:text-lg max-md:text-sm transition-all ease-in-out'>Paste a product link. We compare every store, show the price history and tell you whether to buy now or wait.</p>

                    <form className='flex border border-gray-300 p-3.5 rounded-lg text-lg shadow-lg max-lg:text-xl max-[1200px]:text-base max-lg:p-1 max-sm:px-3 w-full transition-all ease-in-out'>
                        <input className='w-full max-lg:text-sm max-md:text-xs min-w-0' type="text" placeholder='Paste an Amazon, Flipkart or Croma link' />

                        <button className='bg-[#1E90FF] whitespace-nowrap w-52 p-2 text-white h-12 rounded-xl font-semibold max-[1200px]:w-44 max-[1200px]:h-10 max-lg:text-xs max-lg:w-34 max-lg:h-8 max-sm:w-auto max-sm:px-3 max-sm:h-9 transition-all ease-in-out'>Compare prices</button>
                    </form>

                </div>

                {/* Right aside */}
                <div className='w-5/12 mt-12 max-md:mt-4 max-sm:w-full'>
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
