/*eslint-disable*/

import React from 'react';
import './Home.css';
import ImageSlider from '../components/ImageSlider.js';
import { SliderData } from '../components/SliderData';

const Home = () => {
    return (
        <div className='home-container'>
            <ImageSlider slides={SliderData}/>
        </div>
    )
}

export default Home;
