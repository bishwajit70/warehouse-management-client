import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Inventory = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    let { name, picture, price, description, quantity, supplier } = product

    // // let [newQuantity, setNewQuantity] = useState(quantity)

    // let newQuantity = quantity;
    // // let [newQuantity, setNewQuantity]  = useState(0);

    // const handleAddQuantity = () => {
    //     // setNewQuantity(quantity)
    // }
    // // console.log(newQuantity);

    // // const handleDelivered = event => {
    // //     event.preventDefault();
    // //     if (changeQuantity < 1) {
    // //         return false;
    // //     } else {
    // //         changeQuantity--;
    // //         console.log(changeQuantity);
    // //     }

    // // }


    return (
        <div>
            <CustomLink className='bg-purple-500 grid w-3/5 mx-auto  mt-5 text-center py-3 px-5 mb-10 rounded-md text-white text-xl font-bold duration-700 hover:bg-purple-700' to='/manageinventory'>Manage Inventory</CustomLink>

            <div className='mx-40 flex flex-start items-center '>
                <img src={picture} alt="" />
                <div className='p-10 text-left'>
                    <h2>Name : <small>{name}</small></h2>
                    <p>Price : <small>{price}</small></p>
                    <p>Description: <small>{description}</small></p>
                    <p>Quantity : <small>{quantity}</small></p>
                    <p>Supplier : <small>{supplier}</small></p>
                    <div className='pt-5'>
                        <input className='cursor-pointer py-2 mr-5 p px-5 text-white font-bold bg-purple-600 rounded' type="submit" value="Add" />
                        <input className='cursor-pointer py-2 px-5 text-white font-bold bg-purple-600 rounded' type="submit" value="Delivered" />
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Inventory;