import React from 'react';
// import cover from '../../../images/cover.jpg'
import chattogram from '../../../images/chattogram.jpg'
import './Details.css'

const Details = () => {
    return (
        <div className='detail-container'>
            <div>
                <h1 className='title'>Know my Country</h1>
                <p>Bangladesh has a delicate and distinctive attraction of its own to offer. It's a land of enormous beauty, water lakes surrounded by ever green hills, luxuriant tropical rain forests, beautiful cascades of green tea gardens, world's largest mangrove forest. </p>

                <p>It has many atttactive places like siant martin, cox's bazar, bandarban, Sundarban, rangamati, sajek, kaptai, sylhet, srimongol and many more places. </p>

                <p>It's a home of royal bengal tigers. Sundarban is the largest mangrove belt in the world</p>

                <p>It has the longest sea beach of the world. Cox's Bazar is the best tourist attraction in our country.</p>
            </div>
            <div>
                <img src={chattogram} alt=''/>
            </div>
        </div>
    );
};

export default Details;