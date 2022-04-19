import React from 'react';
import bandarban from '../../../images/bandarban.jpg'
import rangamati from  '../../../images/rangamati.jpg'
import coxsbazar1 from '../../../images/coxsbazar1.jpg' 
import sylhet from '../../../images/sylhet.jpg' 
import sundarban2 from '../../../images/sundarban2.jpg' 
import stmartin from '../../../images/stmartin.jpg' 
import Service from '../Service/Service';
import './Services.css'

const services = [
    {id: 1, name: "Dhaka to Bandarban", cost: '10000tk per person', description: '5 days long Dhaka to Bandarban tour. Visiting hills and mountain and enjoy the serene atmostphere', img: bandarban },
    
    {id: 2, name: "Dhaka to Rangamati", cost: '9000tk per person', description: '4 days long Dhaka to Rangamati tour. Visiting hills and mountain and enjoy the eyecatching atmostphere', img: rangamati },

    {id: 3, name: "Dhaka to Cox's Bazar", cost: '15000tk per person', description: '5 days long Dhaka to Coxs Bazar refreshing tour. Visiting longest sea beach of the world and enjoy the serene atmostphere', img: coxsbazar1 },

    {id: 4, name: "Dhaka to Sylhet", cost: '8000tk per person', description: '3 days long Dhaka to Sylhet journey. Enjoy the tea garden and the greenaries. Visiting lalakhal, sada pathor, and many interesting places', img: sylhet },

    {id: 5, name: "Dhaka to Sundarban", cost: '20000tk per person', description: '5 days long Dhaka to Sundarban tour. Walk around the deep mangrove forest. What if you encounter a royal bengal tiger? Boat ride inside the deep forest.', img: sundarban2 },

    {id: 6, name: "Dhaka to Saint Martin", cost: '25000tk per person', description: '3 days long Dhaka to Saint Martin tour. Visiting the serene island. Staying in the island for 3 days will be your best trip ever.', img: stmartin },
]

const Services = () => {
    return (
        <div>
            <h1 className='title'>Tour Packages</h1>
            <div  className='services-container'>
            
            {
                services.map(service => <Service 
                key = {service.id}
                service = {service}
                ></Service>)
            }
            
        </div>
        </div>
        
    );
};

export default Services;