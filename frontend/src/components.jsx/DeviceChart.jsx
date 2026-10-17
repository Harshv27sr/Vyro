import React from 'react'

const DeviceChart = () => {
    return (
        <>
            <div className='border border-gray-300 h-auto p-5 rounded-xl flex flex-col gap-2 shadow-lg max-sm:gap-1 max-sm:p-2'>
                <div className='font-bold text-lg max-lg:text-base transition-all ease-in-out'>Samsung Galaxy M35 5G</div>
                <div className='text-sm opacity-80 max-lg:text-xs transition-all ease-in-out'>Sample result</div>

                <div className='flex flex-col gap-3 max-lg:text-xs transition-all ease-in-out'>
                    <div className='flex items-center gap-12'>
                        <span>Flipkart</span>
                        <div className='w-full h-3 bg-green-600 rounded-xl max-lg:h-2 transition-all ease-in-out'>
                            {/* <div className=''></div> */}
                        </div>
                        <b>₹15999</b>
                    </div>

                    <div className='flex items-center gap-12 max-lg:text-xs transition-all ease-in-out'>
                        <span>Amazon</span>
                        <div className='w-full h-3 bg-green-600 rounded-xl max-lg:h-2 transition-all ease-in-out'>
                            {/* <div className=''></div> */}
                        </div>
                        <b>₹16900</b>
                    </div>

                    <div className='flex items-center gap-12 max-lg:text-xs transition-all ease-in-out'>
                        <span>Croma</span>
                        <div className='w-full h-3 bg-blue-500 rounded-xl max-lg:h-2 transition-all ease-in-out'>
                            {/* <div className='w-4/5 bg-green-500'></div> */}
                        </div>
                        <b>₹14999</b>
                    </div>

                </div>

                <div className='bg-green-100 text-green-700 font-semibold p-2 rounded-lg max-lg:text-xs max-lg:p-1 max-sm:mt-1 max-sm:px-3 transition-all ease-in-out'>Price may drop in 15 days (68% chance)</div>
            </div>
        </>
    )
}

export default DeviceChart
