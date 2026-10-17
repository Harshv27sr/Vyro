import React from 'react'

const PriceAlerts = () => {
    return (
        <>
            <section className='w-full h-[290px] py-3 px-24 my-5 flex flex-col gap-4 bg-[#F6F9FC] max-lg:h-auto max-md:px-14'>

                <div className='bg-white rounded-2xl flex p-10 gap-20 border border-gray-300 max-md:p-5'>
                    <div className='flex flex-col gap-4'>

                        <h2 className='arimo text-3xl text-[#18202a] max-lg:text-2xl'>Get an email when the price drops</h2>

                        <p className='text-xl opacity-60 max-lg:text-lg'>Open any product, enter your target price and we will watch it for you.</p>

                        <button className='bg-[#1E90FF] text-white w-44 h-10 p-2 rounded-xl font-semibold max-lg:w-36 max-lg:h-8 max-lg:p-1 max-lg:text-sm' href="">Try a sample alert</button>
                    </div>

                    <ul className='flex flex-col gap-4 max-lg:gap-2'>
                        <li className='bg-[#F6F9FC] w-full h-auto p-2.5 rounded-xl max-lg:p-1.5'>Set a target price per product</li>

                        <li className='bg-[#F6F9FC] w-full h-auto p-2.5 rounded-xl max-lg:p-1.5'>Prices are checked every few hours</li>

                        <li className='bg-[#F6F9FC] w-full h-auto p-2.5 rounded-xl max-lg:p-1.5'>One email when your target is reached</li>
                    </ul>
                </div>
            </section><hr className='border-gray-300'/>
        </>
    )
}

export default PriceAlerts
