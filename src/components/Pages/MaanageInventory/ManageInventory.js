import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import ManageInventoryProduct from '../MangeInventoryProduct/ManageInventoryProduct';

const ManageInventory = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/inventory'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteInventoryItem = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure to delete the Event?');
        if (proceed) {
            // console.log('deleting Event with,', id)
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProduct = products.filter(product => product._id !== id)
                        setProducts(remainingProduct);
                    }

                });
        }

    }



    return (
        <div className='pt-5'>
             <Link to='/addnewitem' className='bg-purple-500 py-3 px-5 mb-10 rounded-md text-white text-xl font-bold duration-700 hover:bg-purple-700 '>Add New Item</Link>
            {
                products.map(product => <ManageInventoryProduct
                    key={product._id}
                    product={product}
                    handleDeleteInventoryItem={handleDeleteInventoryItem}
                ></ManageInventoryProduct>)
            }
           
        </div>
    );
};

export default ManageInventory;