import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Button from '../../components/Button/';

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-grid'>
                <div className='banner-image'/>
                <div className='banner-content'>
                    <h1>Find a location nearby</h1>
                    <p>Use the search feature or turn on location services.</p>
                    <Link to='/store-locator' className='link'>
                        <Button
                        text='Search a store'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;
