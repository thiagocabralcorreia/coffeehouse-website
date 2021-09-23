import React from 'react';
import './styles.css';

import Slider from '../../components/Slider/';
import { sliderData } from '../../data/sliderData';
import OrderPanel from '../../components/OrderPanel';
import Banner from '../../components/Banner';
import coffeePlant from '../../assets/photos/coffee-plant.jpg';
import AppPanel from '../../components/AppPanel';

const Home = () => {
    return (
        <div className='home-container'>
            <Slider slides={sliderData}/>
            <OrderPanel />
            <Banner
                title='Eco-Friendly'
                subtitle='We reap what we sow and we want the best future for our planet.'
                to='/impact'
                buttonText='Learn more'
                image={coffeePlant}
            />
            <AppPanel/>
        </div>
    )
}

export default Home;
