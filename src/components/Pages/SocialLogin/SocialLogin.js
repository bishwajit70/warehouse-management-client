import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div className='pb-5 w-11/12 mx-auto'>
            <div className='grid text-left'>
                <button onClick={() => signInWithGoogle()} className='cursor-pointer duration-700 p-2 uppercase border-2 mb-2 text-xl text-white bg-blue-600 hover:bg-blue-800 border-blue-600 rounded'>Continue With Google</button>
            </div>
            <div className='grid my-2 text-left'>
                <button className='cursor-pointer duration-700 p-2 uppercase border-2 mb-2 text-xl text-white bg-blue-600 hover:bg-blue-800 border-blue-600 rounded'>Continue With GitHub</button>
            </div>
        </div >
    );
};

export default SocialLogin;