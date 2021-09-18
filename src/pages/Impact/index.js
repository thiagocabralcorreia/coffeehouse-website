import React from 'react';
import './styles.css';
import chImpact from '../../assets/photos/impact.jpg';
import Grid from '../../components/Grid/';

function Impact() {
    return (
        <div>
            <div className='impact-banner'>
                <img src={chImpact} alt='Coffee harvest' />
                <h1>Environmental<br/>and Social Impact</h1>
            </div>
            <div className='impact-content'>
                <p>Our mission is to make the world a better place. That's why Coffee House has always taken care of nature and communities. We work with an environmental conscience, using recycled products, and practicing compost, improving soil health, reducing greenhouse gas emissions, recycling nutrients, and mitigating the impact of droughts.
                </p>
            </div>
            <Grid />
        </div>
    )
}

export default Impact;
