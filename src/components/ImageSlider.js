import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
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
                {SliderData.map((slide, index) => {
                    return (
                        <>
                            <div className={index === current ? 'current slide' : 'slide'} key={index}>
                                {index === current && <img src={slide.image} className='image' alt='Coffee'/>}
                            </div>
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
                        </>
                    )
                })}
            <div className='button-container'>
                <button className='arrowBtn' onClick={previousSlide}>
                    <i className='fas fa-chevron-left'></i>
                </button>    
                <button className='arrowBtn right' onClick={nextSlide}>
                    <i className='fas fa-chevron-right'></i>
                </button>
            </div>
        </div>
    )
};

export default ImageSlider;
