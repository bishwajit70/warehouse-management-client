import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventoryProduct = (props) => {
    const { _id, name, picture, price, description, quantity, supplier } = props.product;
    const handleDeleteInventoryItem = props.handleDeleteInventoryItem

    const navigate = useNavigate()
    const handleUpadate = (id) => {
        // console.log(id)
        navigate(`/inventory/${id}`)
    }


    return (
        <div className='my-2'>
            <div className='bg-purple-50 rounded-md mb-5 p-5 gap-6 md:flex justify-start items-center'>
                <img className='md:w-2/6' src={picture} alt="" />
                <div className='md:w-3/4'>
                    <h2 className='font-bold text-2xl'>{name}</h2>
                    <p className='font-bold'><span className='font-normal'>{description}</span></p>
                    <p className='font-bold'>Id : <span className='font-normal'>{_id}</span></p>
                    <p className='font-bold'>Supplier : <span className='font-normal'>{supplier}</span></p>
                </div>
                <div className='md:w-3/4'>
                    <p className='font-bold'>Price : <span className='font-normal'>$ {price}</span></p>
                    <p className='font-bold'>Quantity : <span className='font-normal'>{quantity} Units </span></p>

                    <p className='font-bold'>Sold : <span className='font-normal'>{props.product?.sold} Units</span></p>

                </div>
                <div className='grid md:w-3/4 mx-auto '>
                    <button onClick={() => handleDeleteInventoryItem(_id)} className='bg-purple-500 mt-5 py-3 mb-10 px-5 text-white w-full md:w-full lg:w-8/12 rounded duration-700 hover:bg-red-600'>DELETE</button>


                    <button onClick={() => handleUpadate(_id)} className='bg-purple-500 py-3 px-5 text-white w-full md:w-full lg:w-8/12 rounded duration-700 hover:bg-red-600'>UPDATE</button>
                </div>




            </div>



        </div>
    );
};

export default ManageInventoryProduct;