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
        <div className='rounded-lg hover:shadow-2xl hover:-mt-1 duration-500 bg-purple-50 border border-b-purple-300 border-l-purple-300 '>
            <div className='grid grid-flow-row'>
                <img className='p-4 w-full mx-auto duration-700 rounded-tl-md rounded-tr-md' src={picture} alt="" />
                <div className='text-left px-4 w-full'>
                    <h2 className='text-2xl font-bold pb-1'>{name}</h2>
                    <p>{description}</p>
                    <h3 className='font-bold text-xl'>Price: <small className='text-xl font-normal'>$ {price}</small> </h3>
                    <h2 className='font-bold text-xl'>Quantity: <small className='text-xl font-normal'>{quantity} Units</small> </h2>
                    <h2 className='font-bold text-xl mb-4'>Supplier: <small className='text-xl font-normal'>{supplier}</small> </h2>

                    <button className='bg-purple-500 py-3 mb-4 px-5 rounded duration-700 hover:bg-purple-700 text-white' onClick={() => handleUpadate(_id)}>UPDATE</button>
                    
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;