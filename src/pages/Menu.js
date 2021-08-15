import React from 'react';
import MainMenu from '../components/MainMenu';
import '../styles/Menu.css';

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-banner'>
                <div className='banner-content'>
                    <h1 className='banner-title'>Menu</h1>
                    <p className='banner-text'>With something for everyone, our menu will delight you.</p>
                </div>
            </div>
            <MainMenu/>
        </div>
    )
}

export default Menu;