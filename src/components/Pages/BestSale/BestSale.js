import React from 'react';
import useBest from '../../../hooks/useBest';
import BestSingle from './BestSingle/BestSingle';

const BestSale = () => {
    const [products, setProducts] = useBest([])


    return (
        <div className='pt-20 shadow-lg pb-10'>
            <h1 className='text-4xl md:text-5xl text-purple-600 font-semibold pb-5 md:pb-10'>Best Selling Products </h1>
            <div className='px-1 py-10 md:px-5 lg:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-3 md:gap-5 lg:gap-5 xl:gap-7'>

                {
                    products.map(product => <BestSingle
                        key={product._id}
                        product={product}
                    ></BestSingle>)
                }
            </div>
        </div>

    );
};

export default BestSale;
