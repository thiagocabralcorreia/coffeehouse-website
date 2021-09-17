import React from 'react';
import '../styles/pages/About.css';

import about from '../assets/photos/about-cover.jpg';

function About() {
    return (
        <div className='about-container'>
            <div className='about-banner'>
                <img src={about} alt='Coffee House Counter' />
                <div className='about-bar'>
                    <h2>Who is Behind All Those Cups of Coffee</h2>
                </div>
            </div>
            <div className='about-content'>
                <p>Well, it's not a big team: it's just me, <a href='https://www.linkedin.com/in/thiago-cabral-correia/' target='_blank' rel="noreferrer">Thiago Correia</a>. I created this imaginary company to use in my front-end web development project. So, in addition to building this website, I elaborated this cafe with a generic name and a simple brand. Also I designed the graphic arts using and editing Freepik mockups, Unsplah images and Pexels videos. I really hope you enjoyed my work.</p>
                <p>If you want to contact me, please click on the link with my name.</p>
                <p>Thank you for your time.</p>
            </div>
        </div>
    )
}

export default About;
