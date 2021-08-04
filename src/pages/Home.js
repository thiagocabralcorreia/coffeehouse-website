/*eslint-disable*/

import React from 'react';
import './Home.css';
import ImageSlider from '../components/ImageSlider.js';
import { SliderData } from '../components/SliderData';
import chApp from '../assets/ch-app.png';
import smartphone from '../assets/photos/smartphone.png';

// We always work with an environmental conscience, using recycled products, and practicing compost, improving soil health, reducing greenhouse gas emissions, recycling nutrients, and mitigating the impact of droughts. We reap what we sow and we want the best future for our planet.

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
                        <h1 className='card-title'>Drive-Thru</h1>
                        <p className='card-text'>Hop in the line and let us know you have a mobile order.</p>
                    </div>
                    
                    <div className='card'>
                        <i className='fas fa-motorcycle fa-2x'></i>
                        <h1 className='card-title'>Delivery</h1>
                        <p className='card-text'>Get your CH favorites delivered right to your doorstep with our app, Uber Eats or iFood.</p>
                    </div>
                    <div className='card'>
                        <i className='fas fa-mug-hot fa-2x'></i>
                        <h1 className='card-title'>In-Store</h1>
                        <p className='card-text'>Pick up your order inside the restaurant.</p>
                    </div>
                </div>
            </div>
            <div className='panel-container'>
                <div className='panel-content'>
                    <h1 className='panel-title'>Eco-Friendly</h1>
                    <p  className='panel-text'>We reap what we sow and we want the best future for our planet.</p>
                    <button  className='panel-button'>Learn more</button>
                </div>
                <div className='image-container'></div>
            </div>
            <div className='app-container'>
                <div className='app-image'>
                    <img src={smartphone} className='smartphone'/>
                </div>
                <div className='app-content'>
                    <h1 className='app-title'>Order on the app</h1>
                    <p className='app-text'>Download our mobile app to enroll and start ordering ahead. Find stores, redeem offers and earn rewards.</p>
                    <img src={chApp} className='ch-app' alt='CH App Button'/>
                </div>
            </div>
        </div>
    )
}

export default Home;
