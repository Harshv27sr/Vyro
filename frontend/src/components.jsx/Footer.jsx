import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='w-full py-3 px-24 my-5 max-lg:px-26 max-md:px-14'>
                <div className='flex gap-36 max-md:gap-14'>
                    <div className='flex flex-col gap-2'>
                        <h className="font-bold text-lg">PriceWatch</h>
                        <p className='opacity-60'>Compare prices across online stores and buy at the right time.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h className="font-bold text-lg">Explore</h>
                        <a className='opacity-60' href="">How it works</a>
                        <a className='opacity-60' href="">Popular deals</a>
                        <a className='opacity-60' href="">Price alerts</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h className="font-bold text-lg">Stores</h>
                        <a className='opacity-60' href="">Amazon</a>
                        <a className='opacity-60' href="">Flipkart</a>
                        <a className='opacity-60' href="">Croma</a>
                    </div>
                </div>
                <hr className='border-gray-300 my-5'/>
                <p className='opacity-60 my-2'>Prices may be a few hours old. Please confirm the price on the seller's site before buying. Predictions are estimates, not guarantees.</p>
            </footer>
        </>
    )
}

export default Footer