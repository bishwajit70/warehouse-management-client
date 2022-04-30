import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product}) => {
    const { _id, name, picture, price, description, quantity, supplier } = product
    const navigate = useNavigate()

    const handleUpadate = (id) => {
        // console.log(id)
        navigate(`/inventory/${id}`)
    }


    return (
        <div className='p-6 rounded-lg bg-purple-50 shadow-lg border-2 grid grid-cols-2 justify-center items-center'>
            <img className='rounded-lg p-1' src={picture} alt="" />
            <div className='ml-10 text-left'>
                <h2 className='text-1xl font-bold pb-1'>Name: {name}</h2>
                <p className=''>Desciption: {description}</p>
                <h3 className='font-bold'>Price: {price}</h3>
                <h2 className='font-bold'>Quantity: {quantity}</h2>
                <h2 className='font-bold mb-2'>Supplier Name: {supplier}</h2>
                <button className='bg-purple-500 py-3 px-5 rounded duration-700 hover:bg-purple-700 text-white' onClick={() => handleUpadate(_id)}>UPDATE</button>
            </div>
        </div>
    );
};

export default SingleProduct;