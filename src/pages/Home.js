/*eslint-disable*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../data/sliderData';
import chApp from '../assets/ch-app.png';
import smartphone from '../assets/photos/smartphone.png';
import Button from '../components/Button';

const Home = () => {
    return (
        <div className='home-container'>
                <ImageSlider slides={SliderData}/>
                <div className='order-container'>
                    <h1 className='order-title'>Ways to Order</h1>
                    <p className='order-text'>Tell us how you want your order.</p>
                    <div className='cards-container'>
                    <div className='card'>
                        <i className='fas fa-car fa-2x'></i>
                        <h1>Drive-Thru</h1>
                        <p>Hop in the line and let us know you have a mobile order.</p>
                    </div>
                    
                    <div className='card'>
                        <i className='fas fa-motorcycle fa-2x'></i>
                        <h1>Delivery</h1>
                        <p>Get your CH favorites delivered right to your doorstep with our app</p>
                    </div>
                    <div className='card'>
                        <i className='fas fa-mug-hot fa-2x'></i>
                        <h1>In-Store</h1>
                        <p>Pick up your order inside the restaurant.</p>
                    </div>
                </div>
            </div>
            <div className='panel-container'>
                <div className='panel'>
                    <h1>Eco-Friendly</h1>
                    <p >We reap what we sow and we want the best future for our planet.</p>
                    <Link to='/impact' className='link'>
                        <Button text='Learn more'/>
                    </Link>
                </div>
                <div className='image-container'></div>
            </div>
            <div className='app-container'>
                <div className='app-image'>
                    <img src={smartphone}/>
                </div>
                <div className='app-content'>
                    <h1>Order on the app</h1>
                    <p>Download our mobile app to enroll and start ordering ahead. Find stores, redeem offers and earn rewards.</p>
                    <Link to='/'>
                        <img src={chApp} className='ch-app' alt='CH App Button'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
