import React, {useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Slider from '../../components/Slider/';
import { sliderData } from '../../data/sliderData';
import OrderPanel from '../../components/OrderPanel';
import Banner from '../../components/Banner';
import AppPanel from '../../components/AppPanel';
import Card from '../../components/Card';
import NewsletterSignup from '../../components/NewsletterSignup';

import coffeePlant from '../../assets/photos/coffee-plant.jpg';
import chStore from '../../assets/photos/ch-store-facade.jpg';
import coffeeQuiz from '../../assets/photos/coffee-beverage.jpg';

const Home = () => {
    const [showTag, setShowTag] = useState(false);    

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Show Contact tag
    const onScroll = useCallback(() => {
        if (window.scrollY > 2000) {
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
                subtitle="We reap what we sow. That's why we are committed to environmental sustainability."
                to='/impact'
                buttonText='Learn more'
                image={coffeePlant}
            />
            <AppPanel />
            <div className='card-wrapper'>
                <Card
                    title='Visit us'
                    subtitle='Enjoy freshly roasted coffee and great food today.'
                    to='/stores'
                    buttonText='Find a store'
                    image={chStore}
                />
                <Card
                    title='Coffee Quiz'
                    subtitle='How much do you know about this vital brew?'
                    to='/quiz'
                    buttonText='Take the quiz'
                    image={coffeeQuiz}
                />
            </div>
            <NewsletterSignup />
        </div>
    )
}

export default Home;
