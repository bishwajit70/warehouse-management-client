import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const HeaderArea = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate('/')
    }


    return (
        <div>
            <Link to='/'>Home</Link>
            {
                user ? <Link onClick={handleSignOut} className='p-5' to='/'>Sign Out</Link> : <Link className='p-5' to='/login'>Login</Link>
            }


        </div>
    );
};

export default HeaderArea;