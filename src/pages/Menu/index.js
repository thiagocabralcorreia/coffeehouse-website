import React, {useState, useEffect } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import './styles.scss';

import MainMenu from '../../components/Menu/';
import beans from '../../assets/videos/beans.mp4';
import Banner from '../../components/Banner';
import chStore from '../../assets/photos/ch-store-sign.jpg';
import chContact from '../../assets/photos/coffee-latte.jpg';

const Menu = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pageLoader = setTimeout(() => {
            setLoading(false)
        }, 1200);
        return () => {
            // remove callback bound to loader
            clearTimeout(pageLoader);
        }
    }, []);

    return (
        <div className='menu'>
            {loading ?
                <div className='loading-container'>
                    <SyncLoader
                        color={'#b69861'}
                        loading={loading}
                        size={13}
                        margin={8}
                    />
                </div>
            : <>
                <div className='cover'>
                    <video src={beans} autoPlay loop muted />
                    <div className='content'>
                        <h1>Menu</h1>
                        <h2>Fresh coffee, breakfast and lunch.<br/> With something for everyone, our menu will delight you.</h2>
                    </div>
                </div>
                <MainMenu />
                <div className='banner-wrapper'>
                    <Banner
                        title='Looking for fresh coffee?'
                        subtitle='Find a store near you.'
                        to='/stores'
                        buttonText='Visit us'
                        image={chStore}
                        marginBottom='2rem'
                    />   
                    <Banner
                        title='How can we help you?'
                        subtitle='We want to hear your questions and suggestions.'
                        to='/contact'
                        buttonText='Talk to us'
                        image={chContact}
                        right                
                    />
                                        
                </div>   
            </>}   
            </div>
    )
}

export default Menu;