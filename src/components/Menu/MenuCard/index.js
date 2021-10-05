import React from 'react';
import './styles.css';

import { menuSections } from '../../../data/menu';
import { useValue } from '../../../hooks/PageContext';

function MenuCard() {
    const { currentValue } = useValue();

    return (
        <div className='menu-card-container'>
            <div className='menu-card-content'>
                <h1>{currentValue}</h1>
                    {menuSections.map((menu) => 
                        menu.subsections.map((subsection) => {
                            return (
                            <div key={subsection.id}>
                                {subsection.type === currentValue
                                && subsection.items.map((item, index) => {
                                    return (
                                        <div
                                        className='menu-card-item'
                                        key={index}>
                                            <h2>{item.subtype}</h2>
                                            <p>{item.ingredients}</p>
                                        </div>
                                    )
                                })}
                            </div>)
                        })
                    )}
            </div>
            <div className='menu-card-image'>
                {menuSections.map((menu) => 
                        menu.subsections.map((subsection) => {
                            return (
                            <div key={subsection.id}>
                                {subsection.type === currentValue
                                && <img className='menu-card-image'
                                    src={subsection.image}
                                    alt={currentValue}></img>
                                }
                            </div>)
                        })
                    )}
            </div>
        </div>
    )
}

export default MenuCard;