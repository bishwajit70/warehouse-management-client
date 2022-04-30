import React, { useEffect, useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    // const [products, setProducts] = useProduct()

    // console.log(products)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = 'https://frozen-inlet-73952.herokuapp.com/inventory'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // const homeProducts = products.slice(0, 6)

    return (
        <div className='grid grid-cols-1 p-3 gap-10 mx-40 justify-center items-center'>
            {

                products.map(product => <SingleProduct
                    key={product._id}
                    product={product}

                ></SingleProduct>)
            }

        </div>
    );
};

export default Home;