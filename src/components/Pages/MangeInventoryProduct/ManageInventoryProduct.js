import React from 'react';

const ManageInventoryProduct = ({ product }) => {
    const { _id, name, picture, price, description, quantity, supplierName } = product
    return (
        <div>
            <div className='flex bg-purple-50 rounded-md mx-20 text-left gap-2 border-2 p-3 mb-3 justify-around items-center'>
                <img className='w-20 p-1' src={picture} alt="" />
                <h2>Name : <small>{name}</small></h2>
                <p>Id : <small>{_id}</small></p>
                <p>Price : <small>{price}</small></p>
                <p className='w-48'>Description: <small>{description}</small></p>
                <p>Quantity : <small>{quantity}</small></p>
                <p>Supplier : <small>{supplierName}</small></p>
                <button className='bg-purple-500 py-3 px-5 text-white rounded duration-700 hover:bg-red-600'>DELETE</button>
            </div>
        </div>
    );
};

export default ManageInventoryProduct;