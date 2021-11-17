import React, { useEffect } from 'react';
import './styles.scss';

import { storeData } from '../../data/storeData';
import Icon from '../../components/Icon';

const Stores = () => {    

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='stores'>            
            <div className='page-header'>
                <h1>Stores</h1>
            </div>
            <div className='store-cards'>
                {storeData.map((store, index) => {
                    return (                         
                            <div className='store-card' key={index}>
                                <h1>{store.name}</h1>
                                <div className='store-data'>  
                                    <div className='icon-wrapper'>                      
                                        <Icon
                                            className='fas fa-store-alt'
                                            size='0.9rem'
                                        />
                                    </div>
                                    <p>{store.address}</p>
                                </div>
                                <div className='store-data'>
                                    <div className='icon-wrapper'>  
                                        <Icon
                                            className='fas fa-clock'
                                            size='0.9rem'
                                        />
                                    </div>
                                    <p>{store.hour}</p>
                                </div>
                                {store.services.map((service, index) => {
                                    return (
                                        <div className='store-data' key={index}>
                                            <div className='icon-wrapper'>
                                                <Icon
                                                    className={service.icon}
                                                    size={service.size}
                                                />
                                            </div>
                                            <p>{service.type}</p>
                                        </div>)
                                })}
                                <a
                                    className='store-data link-maps'
                                    href={store.link}
                                    target='_blank'
                                    rel='noreferrer'                            
                                >
                                    <div className='icon-wrapper'>  
                                        <Icon
                                            className='fas fa-map-marker-alt'
                                            size='1.1rem'
                                        />
                                    </div>
                                    <p>Open in Google Maps</p>
                                </a>
                            </div>
                    )                        
                })}
            </div>
        </div>
    )
}

export default Stores;
