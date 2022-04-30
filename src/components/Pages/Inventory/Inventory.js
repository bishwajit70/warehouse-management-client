import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Inventory = () => {
    const { id } = useParams()
   
    return (
        <div>
            <CustomLink className='bg-purple-500 grid w-3/5 mx-auto  mt-5 text-center py-3 px-5 mb-10 rounded-md text-white text-xl font-bold duration-700 hover:bg-purple-700' to='/manageinventory'>Manage Inventory</CustomLink>

            <h3>This is inventory page: {id}</h3>
        </div>
    );
};

export default Inventory;