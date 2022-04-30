import React from 'react';
import { Link, useParams } from 'react-router-dom';


const Inventory = () => {
    const { id } = useParams()
   
    return (
        <div>
            <h3>This is inventory page: {id}</h3>
            <Link to='/manageinventory'>Manage Inventory</Link>
        </div>
    );
};

export default Inventory;