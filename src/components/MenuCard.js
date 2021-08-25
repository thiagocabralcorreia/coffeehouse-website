import React, { useState } from 'react';
import '../styles/MenuCard.css';
import { menuSections } from '../assets/data';
import menuCoffee from '../assets/photos/menu-coffee.jpg';

export function MenuCard() {
    return (
        <div className='menu-card-container'>
            <div className='menu-card-content'>
                <h1>Coffee</h1>
                <ul>
                    {menuSections.map((menu) => 
                        menu.subsections.map((subsection) =>
                            subsection.items.map((item) => {
                                return (
                                    <li className='menu-card-item'>
                                        <h2>{item.type}</h2>
                                        <p>{item.ingredients}</p>
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
