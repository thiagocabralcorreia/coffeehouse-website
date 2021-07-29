/*eslint-disable*/

import React from 'react';
import './Home.css';
import ImageSlider from '../components/ImageSlider.js';
import { SliderData } from '../components/SliderData';
import plant from '../assets/photos/plant.jpg';

const Home = () => {
    return (
        <div className='home-container'>
            <ImageSlider slides={SliderData}/>
            <div className='cards-container'>
                <div>
                    <div>Icon</div>
                    <h1>Title</h1>
                    <p>Text</p>
                </div>
                <div>
                    <div>Icon</div>
                    <h1>Title</h1>
                    <p>Text</p>
                </div>
                <div>
                    <div>Icon</div>
                    <h1>Title</h1>
                    <p>Text</p>
                </div>
            </div>
            <div className='panel'>
                <div className='content'>
                    <p>Text here</p>
                </div>
                <img src={plant} className='plant'/>
            </div>
        </div>
    )
}

export default Home;
