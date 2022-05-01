import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Inventory = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {

        const url = `https://frozen-inlet-73952.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    let { _id, name, picture, price, description, quantity, supplier } = product


    const handleUpdateQuantity = event => {
        event.preventDefault()

        const quantity = event.target.quantity.value;

        const updatedQuantity = { quantity };



        // Update data to the server

        const url = `https://frozen-inlet-73952.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Quantity Updated Successfully.");
                event.target.reset();
            })
    }

    // const handleDelivery = event => {
    //     event.preventDefault()
    //     const previousQty = quantity;

    //     const quantity = previousQty-1;

    //     const updatedQuantity = { quantity };

    //     // Update data to the server

    //     const url = `http://localhost:5000/inventory/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             alert("Quantity Updated Successfully.");
    //             event.target.reset();
    //         })

    // }


    return (
        <div className='pt-10'>
            <Link className='bg-purple-500 py-3 px-5 inline-block mb-5  rounded-md text-white text-xl font-bold duration-700 hover:bg-purple-700' to='/manageinventory'>Manage Inventory</Link>

            <div className='p-5 w-full border-2 rounded-md pt- md:w-4/12 mx-auto grid grid-cols-1 items-center justify-center '>
                <img className='w-full pt-5' src={picture} alt="" />
                <div className='text-left'>
                    <h2>Name : <small>{name}</small></h2>
                    <p>Price : <small>{price}</small></p>
                    <p>Description: <small>{description}</small></p>
                    <p>Quantity : <small>{quantity}</small></p>
                    <p>Supplier : <small>{supplier}</small></p>
                    <div className='pt-5'>
                        <form>
                            <input className='cursor-pointer w-full mr-5 px-5 text-white font-bold bg-purple-600 py-3 rounded' type="submit" value="Delivered" />
                        </form>
                        <div className='grid pt-5 grid-cols-1'>
                            <h2 className='pb-5 font-bold text-xl text-center'>Want to Re-Stock?</h2>
                            <form onSubmit={handleUpdateQuantity}>
                                <input className='border-2 w-full p-2 mb-5 rounded-md border-purple-200' type="number" name="quantity" id="" />
                                <br />
                                <input className='cursor-pointer w-full py-3 px-5 text-white font-bold bg-purple-600 rounded' type="submit" value="Re Stock" />
                            </form>
                        </div>


                    </div>

                </div>

            </div>


        </div>
    );
};

export default Inventory;