import React from 'react';
import './styles.css';
import MainMenu from '../../components/Menu/';
import beans from '../../assets/videos/beans.mp4';
import Banner from '../../components/Banner';
import chStore from '../../assets/photos/ch-store.png';

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-cover'>
                <video src={beans} autoPlay loop muted />
                <div className='menu-content'>
                    <h1>Menu</h1>
                    <p>Fresh coffee, breakfast and lunch.<br/>With something for everyone, our menu will delight you.</p>
                </div>
            </div>
            <MainMenu />
            <Banner
                title='Find a location nearby'
                subtitle='Use the search feature or turn on location services.'
                to='/store-locator'
                buttonText='Search a store'
                image={chStore}
            />
        </div>
    )
}

export default Menu;