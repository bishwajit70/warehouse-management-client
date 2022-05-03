import React from 'react';

const Discount = () => {
    return (
        <div>
            <div className='px-1 py-20 bg-purple-50 md:px-5 lg:px-10 xl:px-40 grid md:grid-cols-2 gap-y-10 gap-5 md:gap-5 lg:gap-10 xl:gap-20 items-center shadow-xl'>
                {/* // lg:grid-cols-2 xl:grid-cols-2  */}
                <div className='order-1 p-3 md:order-2 text-left'>
                    <h2 className='text-4xl py-1 md:text-5xl lg:text-6xl md:py-2 font-semibold text-purple-600'>25% Discount </h2>
                    <h2 className='text-4xl py-2 md:text-5xl lg:text-6xl mb-5  md:text-6xl md:pb-5 md:py-5 font-semibold text-purple-600'>On <span className='text-orange-400 font-bold'>Festival</span> </h2>
                </div>
                <div className='order-2 md:order-1'>
                    <img className='rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/half-top-view-dried-flowers-with-cinnamon-white-desk-color-flower-flavor_140725-110369.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Discount;