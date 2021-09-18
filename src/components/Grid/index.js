import React from 'react';
import './styles.css';
import { impactPratices } from '../../data/impactPratices';

function Grid({ openModal }) {
    return (
        <div className='grid' onClick={openModal}>
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

export default Grid;
