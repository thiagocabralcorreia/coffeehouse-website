import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import chApp from '../../assets/ch-app.png';
import smartphone from '../../assets/photos/smartphone.png';

const AppPanel = () => {
    return (
        <div className='app'>
            <figure>
                <img src={smartphone} alt='Smartphone' />
            </figure>
            <div className='content'>
                <h1>Order on the App</h1>
                <p>Download our mobile app to enroll and start ordering ahead. Find stores, redeem offers and earn rewards.</p>
                <Link to='/'>
                    <img src={chApp} alt='CH App Button'/>
                </Link>
            </div>
        </div>
    )
}

export default AppPanel;
