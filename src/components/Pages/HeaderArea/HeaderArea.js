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
    const [open, setOpen] = useState(false)

    return (
        <div className='md:mb-32 '>
            <div className='w-full'>
                <div onClick={() => setOpen(!open)} className='w-10 h-10 p-2 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
            </div>
            <div className={` duration-500 absolute w-full text-white ${open ? 'top-10' : 'top-[-520px] md:top-0'}`}>
                <div className='bg-purple-500 md:flex md:px-5 lg:flex lg:px-10 xl:px-40 justify-between items-center py-10'>
                    <div className=''>
                        <Link to='/'><h1 className='text-3xl lg:text-5xl md:text-3xl font-semibold'>Spice House</h1></Link>
                    </div>
                    <div className='md:flex'>

                        <CustomLink className='p-1 lg:p-2 md:p-1 inline-block mb-px md:mb-0 uppercase' to="/">Home</CustomLink>

                        {
                            user ? <CustomLink className='p-1 lg:p-2 md:p-1 inline-block mb-px md:mb-0 uppercase' to='/manageitem'>Manage Item</CustomLink> : ""
                        }


                        {
                            user ? <CustomLink className='p-1 lg:p-2 md:p-1 inline-block mb-px md:mb-0 uppercase' to='/additem'>Add Item</CustomLink> : ""
                        }


                        {
                            user ? <CustomLink className='p-1 lg:p-2 md:p-1 inline-block mb-px md:mb-0 uppercase' to='/myitem'>My Item</CustomLink> : ""
                        }

                        {
                            user ? <CustomLink className='p-1 lg:p-2 md:p-1 inline-block mb-px md:mb-0 uppercase' to='/manageinventory'>Manage Inventory</CustomLink> : ""
                        }
                        <CustomLink to='/blogs' className='p-1 lg:p-2 md:p-1 inline-block mb-px md:mb-0 uppercase'>Blog</CustomLink>
                        {
                            user ? <Link onClick={handleSignOut} className='p-1 lg:p-2 md:p-1 uppercase' to='/'>Sign Out</Link> : <Link className='lg:p-2 md:p-1 uppercase' to='/login'>Login</Link>
                        }


                    </div>


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
        </div>

    );
};

export default HeaderArea;