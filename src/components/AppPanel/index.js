import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import chApp from '../../assets/ch-app.png';
import smartphone from '../../assets/photos/smartphone.png';

function AppPanel() {
    return (
        <div className='app-container'>
                <figure>
                    <img src={smartphone} className='app-smartphone' alt='Smartphone' />
                </figure>
                <div className='app-content'>
                    <h1>Order on the app</h1>
                    <p>Download our mobile app to enroll and start ordering ahead. Find stores, redeem offers and earn rewards.</p>
                    <Link to='/'>
                        <img src={chApp} className='ch-app' alt='CH App Button'/>
                    </Link>
                </div>
            </div>
    )
}

export default AppPanel;
