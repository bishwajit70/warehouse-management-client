import React from 'react';
import useProduct from '../../../hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    const [products] = useProduct()

    console.log(products)


    const homeProducts = products.slice(0, 6)

    return (
        <div className='grid grid-cols-1 p-3 gap-10 mx-40 justify-center items-center'>
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