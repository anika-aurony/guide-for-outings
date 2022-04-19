import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'></div>
            <Spinner animation='border' variant='primary' />
        </div>
    );
};

export default Loading;