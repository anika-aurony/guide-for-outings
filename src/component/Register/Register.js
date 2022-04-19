import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login')
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
            <SocialLogin></SocialLogin>
            <h3 className='title mt-3'>Please Register</h3>
            <form onSubmit={handleRegister}> 
                <input type='text' name='name' id='' placeholder='Your Name' />
             
                <input type='email' name='email' id='' placeholder='Your Email' required/>
              
                <input type='password' name='password' id='' placeholder='Enter password' required />
                <input className='bg-success text-white p-1 d-block mx-auto w-50' type="submit" value='Register' />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pt-2 pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;