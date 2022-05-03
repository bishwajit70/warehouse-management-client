import React from 'react';

const Banner = () => {
    return (

        <div className='px-1 py-10 bg-purple-50 md:px-5 lg:px-10 xl:px-40 grid md:grid-cols-2 gap-y-10 md:gap-4 gap-20 items-center shadow-xl'>
            {/* // lg:grid-cols-2 xl:grid-cols-2  */}
            <div className='order-2 p-3 md:order-1 text-left'>
                <h2 className='text-4xl py-1 md:text-5xl lg:text-6xl xl:text-6xl md:py-2 font-semibold text-purple-600'>Providing Best</h2>
                <h2 className='text-4xl py-1 md:text-5xl lg:text-6xl xl:text-6xl md:pb-5 md:py-5 font-semibold text-purple-600'><span className='text-orange-600 font-bold'>Spices</span> For You</h2>

                <p className='md:text-1xl lg:text-xl pt-3'>We are maintaining a warehouse of spices. We delivery our product with a quick response and maintain the best service rule. You can trust us. We are ensureing the quality products with quality services. </p>
            </div>
            <div className='order-1 md:order-2'>
                <img className='rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/indian-spices-collection-vintage-background_55610-2839.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;