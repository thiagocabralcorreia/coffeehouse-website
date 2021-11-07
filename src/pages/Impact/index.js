import React, { useState, useEffect } from 'react';
import './styles.scss';

import chImpact from '../../assets/photos/impact.jpg';
import Chart from '../../components/Chart/';
import Grid from '../../components/Grid/';
import ImpactModal from '../../components/ImpactModal';

import PageProvider from '../../hooks/PageContext';

const Impact = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <PageProvider>
            <div className='impact-banner'>
                <img src={chImpact} alt='Coffee harvest' />
                <h1>Environmental<br/>and Social Impact</h1>
            </div>
            <div className='impact-content'>
                <p>Our mission is to make the world a better place. That's why Coffee House has always taken care of nature and communities. We work with an environmental conscience, using recycled products, and practicing compost, improving soil health, reducing greenhouse gas emissions, recycling nutrients, and mitigating the impact of droughts.
                </p>
            </div>
            <div className='impact-chart'>         
                <Chart />
            </div>
            <div className='impact-grid'>  
                <Grid onClick={() => setIsOpen(!isOpen)}/>
                <ImpactModal
                    open={isOpen}
                    onClose={() => setIsOpen(!isOpen)}
                />
            </div>
        </PageProvider>
    )
}

export default Impact;
