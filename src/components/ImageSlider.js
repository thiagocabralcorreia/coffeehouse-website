import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
    const [ current, setCurrent ] = useState(0);
    const length = slides.length;

    const previousSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); 
    }
    const nextSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); 
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
            <div className='leftArrowBtn' onClick={previousSlide}>
                <i className='fas fa-chevron-left'></i>
            </div>
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'current slide' : 'slide'} key={index}>
                            {index === current && <img src={slide.image} className='image' alt='Coffee'/>}
                        </div>
                    )
                })}
            <div className='rightArrowBtn' onClick={nextSlide}>
                <i className='fas fa-chevron-right'></i>
            </div>
        </section>
    )
};

export default ImageSlider;
