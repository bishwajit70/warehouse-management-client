import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleAddMyItem = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const picture = event.target.picture.value;
        const email = user.email;
        console.log(email);
        const inventoryItem = { name, price, description, quantity, supplier, picture, email }
        console.log(inventoryItem);

        // send event to the server
        fetch('https://frozen-inlet-73952.herokuapp.com/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventoryItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("My Item Added Successfully.");
                event.target.reset();
            })
    }



    return (


        <div className='w-11/12 md:w-3/12 mx-auto border-2 border-indigo-400 rounded mt-10 pt-8'>
            <h2 className='text-2xl pb-8 font-bold pt-5'>Add My Item</h2>
            <form onSubmit={handleAddMyItem} className='grid grid-cols-1 w-11/12 mx-auto' >

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

export default AddItem;