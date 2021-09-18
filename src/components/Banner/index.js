import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Button from '../../components/Button/';
import store from '../../assets/photos/ch-store.png';

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <h1>Find a location nearby</h1>
                <p>Use the search feature or turn on location services.</p>
                <Link to='/store-locator' className='link'>
                    <Button
                    text='Search a store'
                    white/>
                </Link>
            </div>
            <div className='banner-image'>
                <img src={store} alt='CH Store'></img>
            </div>
            <div className='banner-background'></div>
        </div>
    )
}

export default Banner;
