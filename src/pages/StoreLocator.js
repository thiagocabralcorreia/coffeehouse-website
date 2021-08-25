import React from 'react';
import '../styles/StoreLocator.css';

const StoreLocator = () => {
    return (
        <div className='locator-container'>
            <div className='locator-sidebar'>
                <h1>Looking for fresh coffee?</h1>
                <p>Find a store near you.</p>
                <div className='locator-form'>
                    <input
                        className='locator-input'
                        type='text'
                        placeholder='Search'             
                    />
                    <button className='search-btn'>
                        <i class='fas fa-search'></i>
                    </button>
                </div>
                <div className='locator-form'>
                    <button className='location-btn'>
                        Use your current location <i class='fas fa-map-marker-alt button-pin'></i>
                    </button>
                </div>
            </div>
            <div className='map'></div>
        </div>
    )
}

export default StoreLocator;
