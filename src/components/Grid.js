import React from 'react';
import '../styles/Grid.css';

// Photos
import chImpact01 from '../assets/photos/impact01.jpg';
import chImpact02 from '../assets/photos/impact02.jpg';
import chImpact03 from '../assets/photos/impact03.jpg';
import chImpact04 from '../assets/photos/impact04.jpg';
import chImpact05 from '../assets/photos/impact05.jpg';
import chImpact06 from '../assets/photos/impact06.jpg';

function Grid() {
    return (
        <div className='grid'>
                <div className='grid-row'>
                    <figure>
                        <img src={chImpact01} alt='Wooden cutlery'></img>
                    </figure>
                    <figure>
                        <img src={chImpact02} alt='Recyclable cups'></img>
                    </figure>
                    <figure>
                        <img src={chImpact03} alt='Paper bag'></img>
                    </figure>
                </div>
                <div className='grid-row'>
                    <figure>
                        <img src={chImpact04} alt='Recycling bins'></img>
                    </figure>
                    <figure>
                        <img src={chImpact05} alt='Paper straws'></img>
                    </figure>
                    <figure>
                        <img src={chImpact06} alt='Compost'></img>
                    </figure>
                </div>
            </div>
    )
}

export default Grid;
