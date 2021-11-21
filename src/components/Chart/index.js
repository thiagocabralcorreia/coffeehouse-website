import React, { useState, useCallback, useEffect } from 'react';
import './styles.scss';

const Chart = () => {
    const [showChart, setShowChart] = useState(false);

    const onScroll = useCallback(() => {
        if (window.scrollY > 330) {
            setShowChart(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    },[onScroll]);

    return (
        <>
            {showChart && (
                <div className='chart-wrapper'>
                    <div className='single-chart'>
                        <svg viewBox='0 0 36 36' className='circular-chart'>
                            <path
                                className='circle resource'
                                strokeDasharray='88, 100'
                                d='M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831'
                            />
                            <text x='18' y='20.35' className='percentage'>88%</text>
                        </svg>
                        <p>Our resource recovery rate. Looking for better ways to reduce our waste.</p>            
                    </div>
                <div className='single-chart'>
                    <svg viewBox='0 0 36 36' className='circular-chart'>
                        <path
                            className='circle energy'
                            strokeDasharray='95, 100'
                            d='M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831'
                        />
                        <text x='18' y='20.35' className='percentage'>95%</text>
                    </svg>
                    <p>Our percentage of renewable energy used to power our stores.</p>            
                </div>           
            </div>)}
        </>
    )
}

export default Chart;