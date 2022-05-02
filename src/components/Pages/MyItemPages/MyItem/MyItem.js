import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Loading/Loading';
import SingleProduct from '../../SingleProduct/SingleProduct';

const MyItem = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);

    const email = user.email;

    useEffect(() => {
        const url = `http://localhost:5000/myitem/?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    

    if (loading) {
        return <Loading></Loading>
    };

    const myProducts = products




    return (
        <div>
            <div className='px-1 py-10 md:px-5 lg:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-10 gap-20'>
                {

                    myProducts.map(product => <SingleProduct
                        key={product._id}
                        product={product}

                    ></SingleProduct>)
                }

            </div>
        </div>
    );
};

export default MyItem;