import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, cost, description, img} = service
    return (
        <div className='service'>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h4>Cost: {cost}</h4>
            <p>{description}</p>   
            <button className='button'>Book this Package</button>         
        </div>
    );
};

export default Service;