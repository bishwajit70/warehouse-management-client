import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {

    const [products, setProducts] = useState([])
   
    useEffect(() => {
        const url = 'https://frozen-inlet-73952.herokuapp.com/inventory'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <Loading></Loading>
    };

    const homeProducts = products.slice(0, 6)

    return (
        <div className='px-5 py-10 md:px-5 lg:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-10 gap-20'>
            {

                homeProducts.map(product => <SingleProduct
                    key={product._id}
                    product={product}

                ></SingleProduct>)
            }

        </div>
    );
};

export default Home;