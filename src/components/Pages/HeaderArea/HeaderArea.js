import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';


const HeaderArea = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate('/login')
    }


    return (
        <div className='border-b-2 flex items-center justify-center py-5'>
            
            <CustomLink className='uppercase p-2' to='/'>Home</CustomLink>
            {
                user ? <CustomLink className='p-2' to='/manageitem'>Manage Item</CustomLink> : ""
            }
            {
                user ? <CustomLink className='p-2' to='/additem'>Add Item</CustomLink> : ""
            }
            {
                user ? <CustomLink className='p-2' to='/myitem'>My Item</CustomLink> : ""
            }

            {
                user ? <CustomLink className='p-2' to='/manageinventory'>Manage Inventory</CustomLink> : ""
            }

            {
                user ? <Link onClick={handleSignOut} className='p-2 uppercase' to='/'>Sign Out</Link> : <Link className='p-2 uppercase' to='/login'>Login</Link>
            }


        </div>
    );
};

export default HeaderArea;