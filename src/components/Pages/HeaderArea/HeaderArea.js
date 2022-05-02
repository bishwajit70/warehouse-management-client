import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import { MenuAlt1Icon, MenuIcon, XIcon } from '@heroicons/react/solid'
import HeaderMenu from './HeaderMenu/HeaderMenu';
import './HeaderArea.css'

const HeaderArea = () => {
    const [user, loading, error] = useAuthState(auth);


    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate('/login')
    }
    // const [open, setOpen] = useState(false)

    return (
        <div className='p-5 grid md:flex md:px-5 lg:px-10 xl:px-40 justify-around bg-purple-500 text-white sticky top-0 shadow-md shadow-purple-400'>

            {/* <div onClick={() => setOpen(!open)} className='w-10 h-10 p-2 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div> */}


            <h1 className='text-4xl font-semibold'>Spice House</h1>


            <div className='grid md:flex justify-center mx-auto duration-200 ease-in'>

                <CustomLink className='p-2 inline-block mb-px md:mb-0 uppercase' to="/">Home</CustomLink>

                {
                    user ? <CustomLink className='p-2 inline-block mb-px md:mb-0 uppercase' to='/manageitem'>Manage Item</CustomLink> : ""
                }


                {
                    user ? <CustomLink className='p-2 inline-block mb-px md:mb-0 uppercase' to='/additem'>Add Item</CustomLink> : ""
                }


                {
                    user ? <CustomLink className='p-2 inline-block mb-px md:mb-0 uppercase' to='/myitem'>My Item</CustomLink> : ""
                }

                {
                    user ? <CustomLink className='p-2 inline-block mb-px md:mb-0 uppercase' to='/manageinventory'>Manage Inventory</CustomLink> : ""
                }

                {
                    user ? <Link onClick={handleSignOut} className='p-2  uppercase' to='/'>Sign Out</Link> : <Link className='p-2 uppercase' to='/login'>Login</Link>
                }


            </div>





            {/* {
                    user ? <Link className='p-2 uppercase' to='/additem'>Add Item</Link> : ""
                }
                {
                    user ? <CustomLink className='p-2 uppercase' to='/myitem'>My Item</CustomLink> : ""
                }

                {
                    user ? <CustomLink className='p-2 uppercase' to='/manageinventory'>Manage Inventory</CustomLink> : ""
                }

                {
                    user ? <Link onClick={handleSignOut} className='p-2 uppercase' to='/'>Sign Out</Link> : <Link className='p-2 uppercase' to='/login'>Login</Link>
                } */}






        </div >
    );
};

export default HeaderArea;