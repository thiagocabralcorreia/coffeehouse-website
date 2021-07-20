/*eslint-disable*/

import React from 'react';
import './Home.css';
import espresso from '../assets/photos/espresso-machine.jpg';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='cover-container'>
                <img
                    src={espresso}
                    alt='Espresso machine (photo by Jason Betz on Unsplash)'
                    className='cover'
                />
            </div>
        </div>
    )
}

export default Home;
