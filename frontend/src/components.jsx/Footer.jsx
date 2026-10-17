import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='w-full py-3 px-24 my-5 max-md:px-8 max-sm:px-5'>
                <div className='flex flex-wrap gap-12 max-sm:gap-8'>
                    <div className='flex flex-col gap-2 max-w-xs'>
                        <h3 className="font-bold text-lg">PriceWatch</h3>
                        <p className='opacity-60'>Compare prices across online stores and buy at the right time.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className="font-bold text-lg">Explore</h3>
                        <a className='opacity-60' href="">How it works</a>
                        <a className='opacity-60' href="">Popular deals</a>
                        <a className='opacity-60' href="">Price alerts</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className="font-bold text-lg">Stores</h3>
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