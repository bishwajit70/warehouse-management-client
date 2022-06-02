import axios from 'axios';
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

    useEffect(() => {
        const url = `https://frozen-inlet-73952.herokuapp.com/myitem?email=${user?.email}`

        const getProducts = async () => {
            const { data } = await axios.get(url, {
                headers: {
                    accessToken: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setProducts(data);
            console.log(localStorage.getItem('accessToken'))
            
        }

        getProducts();
        
        // fetch(url, {

        // })
        //     .then(res => res.json())
        //     .then(data => setProducts(data))
    }, [user])

    


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