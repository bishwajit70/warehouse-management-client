import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import ManageInventoryProduct from '../../MangeInventoryProduct/ManageInventoryProduct';

const ManageItem = () => {
    const [products, setProducts] = useState([])
    const [user, loading, error] = useAuthState(auth);
    const email = user.email;

    useEffect(() => {
        const url = `https://frozen-inlet-73952.herokuapp.com/myitem/?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteInventoryItem = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure to delete the Item?');
        if (proceed) {
            // console.log('deleting Event with,', id)
            const url = `https://frozen-inlet-73952.herokuapp.com/myitem/${id}`
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
        <div>
            <Link to='/additem' className='bg-purple-500 mt-10 py-3 inline-block px-5 mb-10 rounded-md text-white text-xl font-bold duration-700 hover:bg-purple-700 '>Add  Item</Link>
            <div className='rounded-md md:mx-20 text-left gap-2 border-2 p-3 mb-3 justify-around items-center'>
                {
                    products.map(product => <ManageInventoryProduct
                        key={product._id}
                        product={product}
                        handleDeleteInventoryItem={handleDeleteInventoryItem}
                    ></ManageInventoryProduct>)
                }
            </div>
        </div>
    );
};

export default ManageItem;