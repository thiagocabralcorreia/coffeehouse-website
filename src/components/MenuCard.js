import React from 'react';
import '../styles/MenuCard.css';
import menuCoffee from '../assets/photos/menu-coffee.jpg';

function MenuCard() {
    return (
        <div className='menu-card-container'>
            <div className='menu-card-content'>
                <h1 className='menu-card-title'>Coffee</h1>
                <ul>
                    <li className='menu-card-item'>
                        <h2 className='card-item-title'>Espresso</h2>
                        <p className='card-item-description'>Espresso</p>
                    </li>
                    <li className='menu-card-item'>
                        <h2 className='card-item-title'>Americano</h2>
                        <p className='card-item-description'>Espresso, Hot Water</p>
                    </li>
                    <li className='menu-card-item'>
                        <h2 className='card-item-title'>Latte</h2>
                        <p className='card-item-description'>Espresso, Creamy Steamed Milk</p>
                    </li>
                    <li className='menu-card-item'>
                        <h2 className='card-item-title'>Cappuccino</h2>
                        <p className='card-item-description'>Espresso, Milk Foam</p>
                    </li>
                    <li className='menu-card-item'>
                        <h2 className='card-item-title'>Mocha</h2>
                        <p className='card-item-description'>Espresso, Steamed Milk, Chocolate</p>
                    </li>
                    <li className='menu-card-item'>
                        <h2 className='card-item-title'>Caramel Macchiato</h2>
                        <p className='card-item-description'>Espresso, Steamed Milk, Vanilla, Caramel</p>
                    </li>
                </ul>
            </div>
            <div className='menu-card-image'>
                <img className='menu-card-image' src={menuCoffee} alt='Coffee cups'></img>
            </div>
        </div>
    )
}

export default MenuCard;
