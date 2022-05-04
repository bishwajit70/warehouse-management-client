import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import BestSale from '../BestSale/BestSale';
import ContactUs from '../ContactUs/ContactUs';
import Banner from '../HeaderArea/Banner/Banner';
import Loading from '../Loading/Loading';
import SingleProduct from '../SingleProduct/SingleProduct';
import Discount from './Discount/Discount';

const Home = () => {

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
        const url = 'https://frozen-inlet-73952.herokuapp.com/inventory'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    };

    console.log(user);

    const homeProducts = products.slice(0, 6)

    // let from = location.state?.from?.pathname || "/";

    // if (user) {
    //     navigate(from, { replace: true });
    // }

    return (
        <div>
            <Banner></Banner>
            <div>

                <h1 className='text-4xl md:text-5xl text-purple-600 font-semibold pt-10 pb-5'>Inventory Items</h1>
                <div className='px-1 py-10 md:px-5 lg:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-10 md:gap-5 lg:gap-10 xl:gap-20'>

                    {

                        homeProducts.map(product => <SingleProduct
                            key={product._id}
                            product={product}

                        ></SingleProduct>)
                    }

                </div>
            </div>

            {
                user ? <Link className='bg-purple-500 inline-block py-3 px-5 mb-10 rounded-md text-white text-xl font-bold duration-700 hover:bg-purple-700' to='/manageinventory'>Manage Inventory</Link> : ""
            }
            <Discount></Discount>
            <BestSale></BestSale>
            <ContactUs></ContactUs>

        </div>

    );
};

export default Home;