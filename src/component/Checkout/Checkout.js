import React from 'react';

const Checkout = () => {
    return (
        <div className='register-form'>
            
            <h3>Checkout Details:</h3>
            <input type='text' name='name' id='' placeholder='Your Name' />
            <input type='text' name='Departure Date' id='' placeholder='Departure Date' />
            <input type='text' name='Destination' id='' placeholder='Destination' />
            <input className='bg-success text-white p-1 d-block mx-auto w-50' type="submit" value='Book' />
        </div>
    );
};

export default Checkout;