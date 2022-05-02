import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, name, picture, price, description, quantity, supplier } = product
    const navigate = useNavigate()

    const handleUpadate = (id) => {
        // console.log(id)
        navigate(`/inventory/${id}`)
    }


    return (
        <div className='rounded-lg bg-purple-50 border border-b-purple-300 border-l-purple-300 shadow-2xl'>
            <div className='grid grid-flow-row'>
                <img className='p-4 w-full rounded-tl-md rounded-tr-md' src={picture} alt="" />
                <div className='text-left p-4 w-full'>
                    <h2 className='text-1xl font-bold pb-1'>Name: {name}</h2>
                    <p className=''>Desciption: {description}</p>
                    <h3 className='font-bold'>Price: {price}</h3>
                    <h2 className='font-bold'>Quantity: {quantity}</h2>
                    <h2 className='font-bold mb-2'>Supplier Name: {supplier}</h2>
                    <button className='bg-purple-500 py-3 px-5 rounded duration-700 hover:bg-purple-700 text-white' onClick={() => handleUpadate(_id)}>UPDATE</button>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;