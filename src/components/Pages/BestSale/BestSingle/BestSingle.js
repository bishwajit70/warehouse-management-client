import React from 'react';

const BestSingle = ({product}) => {
    const {picture, name, description} = product
    return (
        <div className='border p-2 shadow-lg rounded-lg text-left'>
            <img className='rounded-lg' src={picture} alt="" />     
            <h2 className='pt-5 font-semibold text-3xl pb-5'>{name}</h2>
            <p className='pb-5'>{description}</p>

        </div>
    );
};

export default BestSingle;