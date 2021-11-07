import React, {useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Slider from '../../components/Slider/';
import { sliderData } from '../../data/sliderData';
import OrderPanel from '../../components/OrderPanel';
import Banner from '../../components/Banner';
import coffeePlant from '../../assets/photos/coffee-plant.jpg';
import AppPanel from '../../components/AppPanel';
import NewsletterSignup from '../../components/NewsletterSignup';

const Home = () => {
    const [showTag, setShowTag] = useState(false);    

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Show Contact tag
    const onScroll = useCallback(() => {
        if (window.scrollY > 975) {
            setShowTag(true);
        }
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    },[onScroll]);

    return (
        <div className='home'>
            <Slider slides={sliderData}/>
            {showTag && <div className='tag-container'>
                <Link
                    to='/contact'
                    className='tag-link'
                >
                    <p>Contact</p>
                </Link>
            </div>}
            <OrderPanel />
            <Banner
                title='Eco-Friendly'
                subtitle='We reap what we sow and we want the best future for our planet.'
                to='/impact'
                buttonText='Learn more'
                image={coffeePlant}
            />
            <AppPanel />
            <NewsletterSignup />
        </div>
    )
}

export default Home;
