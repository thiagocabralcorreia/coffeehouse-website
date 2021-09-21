import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { sliderData } from '../../data/sliderData';

const Slider = ({ slides }) => {
    const [ current, setCurrent ] = useState(0);
    const length = slides.length;

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); 
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); 
    }

    if(!Array.isArray(slides) || length <= 0) {
        return null;
    }
    return (
        <div className='slider'>
                {sliderData.map((slide, index) => {
                    return (
                        <div
                        key={index}
                        className={index === current ? 'current slide' : 'slide'}>
                            {index === current &&
                                <div>
                                    <img 
                                    src={slide.landscape}
                                    className='landscape'
                                    alt='Coffee banner'
                                    />
                                    <img 
                                    src={slide.square}
                                    className='square'
                                    alt='Coffee banner'
                                    />
                                </div>}
                            <div className='dots-container'>
                                <button
                                    className={current === 0 ? 'active slider-dot' : 'slider-dot'}
                                    onClick={() => setCurrent(0)}>
                                </button>
                                <button
                                    className={current === 1 ? 'active slider-dot' : 'slider-dot'}
                                    onClick={() => setCurrent(1)}>
                                </button>
                                <button
                                    className={current === 2 ? 'active slider-dot' : 'slider-dot'}
                                    onClick={() => setCurrent(2)}>
                                </button>
                            </div>
                        </div>
                    )
                })}
            <div className='arrow-container'>
                <button className='arrowBtn left' onClick={previousSlide}>
                    <i className='fas fa-chevron-left'></i>
                </button>    
                <button className='arrowBtn right' onClick={nextSlide}>
                    <i className='fas fa-chevron-right'></i>
                </button>
            </div>
        </div>
    )
};

Slider.propTypes = {
    className: PropTypes.arrayOf(PropTypes.object),
};

Slider.defaultProps = {
    className: [],
};

export default Slider;
