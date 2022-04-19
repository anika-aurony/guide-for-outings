import React from 'react';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Details></Details>
        </div>
    );
};

export default Home;