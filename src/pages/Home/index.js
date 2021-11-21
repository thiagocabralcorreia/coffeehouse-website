import React, {useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
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
    const [loading, setLoading] = useState(true);
    const [showTag, setShowTag] = useState(false);

    useEffect(() => {
        const pageLoader = setTimeout(() => {
            setLoading(false)
        }, 1200);
        return () => {
            // remove callback bound to loader
            clearTimeout(pageLoader);
        }
    }, []);

    const onScroll = useCallback(() => {
        if (window.scrollY > 2000) {
            setShowTag(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });

    return (
        <div className='home'>
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
                <Slider slides={sliderData}/>
                {showTag && <div className='tag-container'>
                    <Link
                        to='/contact'
                        className='tag-link'
                    >
                        <p>Contact</p>
                    </Link>
                </div>}
                <div className='bottom-container'>
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
            </>}
        </div>
    )
}

export default Home;
