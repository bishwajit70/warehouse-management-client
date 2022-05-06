import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { ImEarth } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 justify-center px-5 py-10 bg-purple-200 md:px-5 lg:px-10 xl:px-40  md:grid-cols-3 gap-y-10 gap-20 text-left border-b-2 shadow-2xl'>
                <div>
                    <h1 className='text-3xl pb-5'>About Us</h1>
                    <p className='text-1xl '>We are maintaining a warehouse of spices. We delivery our product with a quick response and maintain the best service rule. You can trust us. We are ensureing the quality products with quality services.</p>
                </div>
                <div>
                    <h1 className='text-3xl pb-5'>Recent Blogs</h1>
                    <div className='grid font-semibold'>
                        <Link className='pb-3' to='/blogs'>Difference between Nodejs and JavaScript:</Link>
                        <Link to='/blogs'>When should you use NodeJs and when should you use Mongodb?</Link>
                        <Link className='pb-3' to='/blogs'>Differences between SQL and noSQL databases.</Link>
                        <Link className='pb-3' to='/blogs'>What is the purpose of jwt and how does it work</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl  pb-5'>Contact Us</h1>
                    <p className='pb-3'><AiOutlineHome></AiOutlineHome> House-64, Block-B, Road-10, Joydebpur, Gazipur, Bangladesh</p>
                    <p><BsTelephone></BsTelephone> </p>
                    <p className='py-2'>+008 01712755278</p>
                    <p className='py-2'><ImEarth></ImEarth></p>
                    <Link to="https://warehouse-management-332f6.web.app/">Spice-House</Link>

                </div>
            </div>
            <div className='bg-purple-600 py-10 text-white'> {(new Date().getFullYear())} &copy; All Rights Reserved. </div>
        </div>
    );
};

export default Footer;