import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className='w-5/12 mx-auto border-2 border-indigo-400 rounded mt-10 pt-8'>
            <h2 className='text-4xl text-blue-600 font-bold pb-5'>Please Register</h2>
            <form className='w-11/12 py-5  grid mx-auto'>
                <input type="text" name="name" id="name" placeholder='Name' />
                <input className='p-2 border-2 mb-5 border-indigo-300 rounded' type="email" name="email" id="email" placeholder='Email' required />
                <input className='p-2 border-2 mb-5 border-indigo-300 rounded' type="password" name="password" id="password" required placeholder='Password' />
                <input className='p-2 border-2 mb-5 border-indigo-300 rounded' type="password" name="ConfirmPassword" id="ConfirmPassword" required placeholder='Confirm Password' />
                <input className='p-2 uppercase border-2 mb-2 text-xl text-white bg-blue-600 hover:bg-blue-800 duration-700  cursor-pointer border-blue-700 rounded' type="submit" value="Register" />
                <p className='text-xl'>Already have an account? <Link className='text-blue-700 text-xl' to='/login'>Login</Link></p>
                <div className='w-100 py-2 px-2 md:px-10 flex w-full items-center justify-around'>
                    <div className='bg-blue-600 w-1/2 md:w-2/5 h-0.5'></div>
                    <h2 className='text-center text-sm py-1 text-blue-700'>OR</h2>
                    <div className='bg-blue-600 w-1/2 md:w-2/5 h-0.5'></div>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;