import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, cost, description, img } = service
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Cost: {cost}</h4>
            <p>{description}</p>
            <Link to="/checkout">
                <button className='button'>Book this Package</button>
            </Link>
        </div>
    );
};

export default Service;