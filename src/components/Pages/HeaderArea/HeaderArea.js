import React from 'react';
import { Link } from 'react-router-dom';

const HeaderArea = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default HeaderArea;