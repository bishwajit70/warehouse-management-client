import React from 'react';
import useProduct from '../../../hooks/useProduct';
import ManageInventoryProduct from '../MangeInventoryProduct/ManageInventoryProduct';

const ManageInventory = () => {
    const [products] = useProduct()
    return (
        <div className='pt-5'>
             <button className='bg-purple-500 py-3 px-5 mb-5 rounded-md text-white text-xl font-bold duration-700 hover:bg-purple-700 '>Add New Item</button>
            {
                products.map(product => <ManageInventoryProduct
                    key={product._id}
                    product={product}
                ></ManageInventoryProduct>)
            }
           
        </div>
    );
};

export default ManageInventory;