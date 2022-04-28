import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='flex ms-150 mr-150 justify-between items-center'>
            <div className='w-4/5 py-10'>
                <h1 className='text-6xl font-bold'>Page Not Found</h1>
                <p className='pt-10 text-xl'>We're sorry, but we can't find the page you were looking for. <Link className='text-orange-600 font-bold' to='/'>Go Home</Link></p>
            </div>
            <div className=''>
                <img src="https://i.ibb.co/HXNnW6n/404.jpg" alt="" />
            </div>

        </div>
    );
};

export default NotFoundPage;