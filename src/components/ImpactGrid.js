import React from 'react';
import '../styles/Grid.css';
import { impactPratices } from '../data/impactPratices';

function ImpactGrid() {
    return (
        <div className='grid'>
                <div className='grid-container'>
                    {impactPratices.map((item, index) => {
                        return (
                        <figure key={index}>
                            <img src={item.image} alt={item.description}></img>
                        </figure>)
                    })}
                </div>
            </div>
    )
}

export default ImpactGrid;
