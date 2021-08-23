import React, { useState } from 'react';
import '../styles/MenuCard.css';
import { menuSections } from '../assets/data';
import menuCoffee from '../assets/photos/menu-coffee.jpg';

export function MenuCard() {
    return (
        <div className='menu-card-container'>
            <div className='menu-card-content'>
                <h1 className='menu-card-title'>Coffee</h1>
                <ul>
                    {menuSections.map((menu) => 
                        menu.subsections.map((subsection) =>
                            subsection.items.map((item) => {
                                return (
                                    <li className='menu-card-item'>
                                        <h2 className='card-item-title'>{item.type}</h2>
                                        <p className='card-item-description'>{item.ingredients}</p>
                                    </li>
                                )
                            })
                        )
                    )}
                </ul>
            </div>
            <div className='menu-card-image'>
                <img className='menu-card-image' src={menuCoffee} alt='Coffee'></img>
            </div>
        </div>
    )
}
