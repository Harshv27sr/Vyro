import React from 'react'

const ProductCards = () => {
    return (
        <section className="w-full py-3 max-lg:py-1">
            <div className="relative w-64 h-[345px] max-lg:w-52 max-lg:h-auto max-lg:p-2 p-4 border border-gray-300 rounded-2xl bg-white hover:border-blue-400 transition-all">

                {/* Product Image */}
                <div className="relative w-full h-40 max-lg:h-32 bg-gray-50 rounded-xl flex items-center justify-center">

                    {/* Discount Badge */}
                    <span className="absolute top-3 left-3 rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white max-lg:px-1 max-lg:text-xs">
                        75% off
                    </span>

                    <img
                        src="/products/boat.jpg"
                        alt=""
                        className="w-full h-full object-contain p-3 max-lg:p-2"
                    />
                </div>

                {/* Product Name */}
                <h3 className="mt-4 text-lg max-lg:text-base font-semibold text-gray-900 leading-snug max-lg:pl-3">
                    boAt Airdopes 141 Earbuds
                </h3>

                {/* Product Price */}
                <div className="flex items-center gap-2 mt-3 max-lg:gap-1 max-lg:mt-1 max-lg:pl-3">
                    <span className="text-2xl font-bold text-gray-900 max-lg:text-xl">
                        ₹1,099
                    </span>

                    <span className="text-sm text-gray-500 line-through max-lg:text-xs">
                        ₹4,490
                    </span>
                </div>

                {/* Store Label */}
                <span className="inline-block mt-3 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 max-lg:mt-1 max-lg:px-2 max-lg:ml-3">
                    Lowest on Amazon
                </span>

            </div>
        </section>
    )
}

export default ProductCards