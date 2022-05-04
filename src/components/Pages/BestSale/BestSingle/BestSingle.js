import React from 'react';

const BestSingle = ({product}) => {
    const {picture, name, description} = product
    return (
        <div className='border p-2 hover:shadow-lg hover:-mt-1 duration-500 hover:scale-y-102 rounded-lg text-left'>
            <img className='rounded-lg opacity-80 hover:opacity-100 duration-500' src={picture} alt="" />     
            <h2 className='pt-5 font-semibold text-3xl pb-5'>{name}</h2>
            <p className='pb-5'>{description}</p>

        </div>
    );
};

export default BestSingle;