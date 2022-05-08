import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='grid grid-cols-1 md:px-40 mx-auto w-full justify-between items-center'>
            <div className='py-40'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-6xl text-purple-600 font-bold'>Page Not Found</h1>
                <p className='pt-10 text-xl'>We're sorry, but we can't find the page you were looking for. <Link className='text-purple-600 font-bold' to='/'>Go Home</Link></p>
            </div>
        </div>
    );
};

export default NotFoundPage;