import React, { useState } from 'react';
import './Banner.css'

import sundarban1 from '../../../images/cover.jpg';

const Banner = () => {
  
    return (
       <div>
           <img
          className='banner'
          src={sundarban1}
          alt="Second slide"
        />
       </div> 
        

        
  );

};

export default Banner;