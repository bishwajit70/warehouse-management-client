import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddNewItem = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user.email);
    // const email = user.email;
    const handleAddNewItem = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const picture = event.target.picture.value;
        const inventoryItem = { name, price, description, quantity, supplier, picture }
        console.log(inventoryItem);
        // send event to the server
        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventoryItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Event Added Successfully.");
                event.target.reset();
            })
    }
    return (
        <div className='w-4/12 border-2 border-purple-200 rounded mt-10 mx-auto p-2'>
            <h2 className='text-2xl pb-8 font-bold pt-5'>Add New Item</h2>
            <form className='grid grid-cols-1 w-11/12 mx-auto' onSubmit={handleAddNewItem}>

                <input className='p-2 border-2 mb-4 rounded border-purple-200' type="text" name="name" id="name" placeholder='Item Name' required />

                <input className='p-2 border-2 mb-4 rounded border-purple-200' type="text" name="price" id="priece" placeholder='Price' required />

                <input className='p-2 border-2 mb-4 rounded border-purple-200' type="text" name="description" id="description" placeholder='Description' required />

                <input className='p-2 border-2 mb-4 rounded border-purple-200' type="text" name="quantity" id="quantity" placeholder='Quntatity' required />

                <input className='p-2 border-2 mb-4 rounded border-purple-200' type="text" name="supplier" id="supplier" placeholder='Supplier Name' required />

                <input className='p-2 border-2 mb-4 rounded border-purple-200' type="text" name="picture" id="picture" placeholder='Image URL' required />

                <input className='p-2 text-xl text-white font-semibold uppercase mb-4 bg-purple-600 hover:bg-purple-700 duration-700 cursor-pointer rounded border-purple-200' type="submit" value="Add Item" />

            </form>
        </div>
    );
};

export default AddNewItem;