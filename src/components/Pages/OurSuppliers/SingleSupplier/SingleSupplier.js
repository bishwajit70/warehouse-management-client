import React from 'react';

const SingleSupplier = ({ supplier }) => {
    const { name, image, company, address, about, phone } = supplier
    return (
        <div className='border p-2 hover:shadow-lg bg-purple-50 hover:-mt-1 duration-500 hover:scale-y-102 rounded-lg text-left'>
            <img src={image} alt="" />
            <div>
                <h1 className='text-3xl font-semibold pt-5'>{name}</h1>
                <h2 className='text-2xl pt-2'>{company}</h2>
                <h3 className='pt-2 font-bold'>{address}</h3>
                <h4 className='pt-2'>Phone: {phone}</h4>
                <p className='py-5'>{about}</p>
            </div>

        </div>
    );
};

export default SingleSupplier;