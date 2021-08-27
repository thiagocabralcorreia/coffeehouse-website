import React from 'react';
import MainMenu from '../components/MainMenu';
import '../styles/Menu.css';
import cappuccino from '../assets/videos/cappuccino.mp4';

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-banner'>
                <video src={cappuccino} autoPlay loop muted />
                <div className='menu-content'>
                    <h1>Menu</h1>
                    <p>Fresh coffee, breakfast and lunch.<br/>With something for everyone, our menu will delight you.</p>
                </div>
            </div>
            <MainMenu/>
        </div>
    )
}

export default Menu;