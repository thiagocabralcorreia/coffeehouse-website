import React, { useEffect } from 'react';
import './styles.scss';

import coffeeBerry from '../../assets/photos/coffee-berry.jpg';
import coffeeBeans from '../../assets/photos/coffee-beans.jpg';
import coffeePot from '../../assets/photos/coffee-pot.jpg';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='about'>
            <div className='cover'>
                <div className='story-photo'></div>
                <div className='bar'>
                    <h2>Coffee is Our<span> </span><br/>Greatest Legacy</h2>
                </div>
            </div>
            <div className='content'>
                <p>In 1986, Coffee House was born. The first store opened in a small town far far away, on the edge of a dirt road, beside a modest farm, where there was a coffee plantation that is now miles long (a piece of heaven with free entry: you are always welcome).</p>
                <p>We have believed in the power of coffee since the beginning of our history. Coffee provides a complex blend of color, aroma and flavor, wakes us up, is a big source of dietary antioxidants and protects against various diseases. It’s a magic drink, right? That's why we love serving this.</p>
                <p>We sow and harvest the coffee, then carefully select each bean for roasting. After all, every fresh cup of coffee should be a wonderful experience.</p>
            </div>
            <div className='gallery'>
                <img src={coffeeBerry} alt='Coffee berry'/>
                <img src={coffeeBeans} alt='Coffee beans'/>
                <img src={coffeePot} alt='Coffee pot'/>
            </div>
        </div>
    )
}

export default About;
