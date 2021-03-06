import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png'
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }

    if(loading){
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-success d-block w-50 mx-auto  mt-3 '>
                    <img className='px-2' style={{ width: '50px' }} src={google} alt="" />
                    Google Sign In
                </button>
            </div>
            {errorElement}
            <div className='d-flex mt-3 align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 px-1'> Or</p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>

            </div>
        </div>
    );
};

export default SocialLogin;