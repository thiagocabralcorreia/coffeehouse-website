import React from 'react';
import './styles.scss';
import Button from '../../components/Button';
import InputSearch from '../../components/InputSearch/';

const StoreLocator = () => {
    return (
        <div className='locator'>
            <div className='sidebar'>
                <h1>Looking for fresh coffee?</h1>
                <p>Find a store near you.</p>
                <InputSearch
                placeholder='Search'/>
                <div className='button-location'>
                    <Button 
                    text='Use your current location'
                    display='flex'
                    hasIcon={{
                    icon: 'fas fa-map-marker-alt',
                    }}/>
                </div>
            </div>
            <div className='map'></div>
        </div>
    )
}

export default StoreLocator;
