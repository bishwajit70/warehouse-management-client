import React from 'react';

const ManageInventoryProduct = (props) => {
    const { _id, name, picture, price, description, quantity, supplier } = props.product;
    const handleDeleteInventoryItem = props.handleDeleteInventoryItem


    return (
        <div className='my-2'>
            <div className='bg-purple-50 rounded-md mb-5 p-5 gap-6 md:flex justify-start items-center'>
                <img className='md:w-2/6' src={picture} alt="" />
                <div className='md:w-3/4'>
                    <h2 className='font-bold'>Name : <span className='font-normal'>{name}</span></h2>
                    <p className='font-bold'>Id : <span className='font-normal'>{_id}</span></p>
                    <p className='font-bold'>Price : <span className='font-normal'>{price}</span></p>
                </div>
                <div className='md:w-3/4'>
                    <p className='font-bold'>Description: <span className='font-normal'>{description}</span></p>
                    <p className='font-bold'>Quantity : <span className='font-normal'>{quantity}</span></p>
                    
                    <p className='font-bold'>Sold : <span className='font-normal'>{props.product?.sold}</span></p>
                    <p className='font-bold'>Supplier : <span className='font-normal'>{supplier}</span></p>
                </div>
                <button onClick={() => handleDeleteInventoryItem(_id)} className='bg-purple-500 py-3 px-5 text-white w-full md:w-2/12 rounded duration-700 hover:bg-red-600'>DELETE</button>

            </div>



        </div>
    );
};

export default ManageInventoryProduct;