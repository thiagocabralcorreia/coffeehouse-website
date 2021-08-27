import React from 'react';
import '../styles/MenuCard.css';
import { menuSections } from '../assets/data';
import menuCoffee from '../assets/photos/menu-coffee.jpg';

function MenuCard() {
    const type = 'Coffee';
    return (
        <div className='menu-card-container'>
            <div className='menu-card-content'>
                <h1>{type}</h1>
                    {menuSections.map((menu) => 
                        menu.subsections.map((subsection) => {
                            return (
                            <div key={subsection.id}>
                                {subsection.type === type
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
                <img className='menu-card-image' src={menuCoffee} alt='Coffee'></img>
            </div>
        </div>
    )
}

export default MenuCard;