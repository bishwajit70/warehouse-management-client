import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { GrGoogle } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, googleLoading, GoogleError] = useSignInWithGoogle(auth);
    
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    if(googleUser || githubUser){
        navigate('/')
    }

    return (
        <div className='pb-5 w-11/12 mx-auto'>
            <div className='grid'>
                <button onClick={() => signInWithGoogle()} className='cursor-pointer duration-700 p-2 uppercase border-2 mb-2 text-xl text-white bg-blue-600 hover:bg-blue-800 border-blue-600 rounded'><GrGoogle className='text-wihte text-2xl mr-5 inline-block' />Continue With Google</button>
            </div>
            <div className='grid my-2 text-left'>

                <button onClick={() => signInWithGithub()} className='cursor-pointer duration-700 p-2 uppercase border-2 mb-2 text-xl text-white bg-blue-600 hover:bg-blue-800 border-blue-600 rounded'>
                    <FaGithub className='text-wihte text-2xl mr-5 inline-block' />
                    Continue With GitHub</button>
            </div>
        </div >
    );
};

export default SocialLogin;