import React, { useState } from 'react';
import MenuCard from './MenuCard';
import '../styles/MainMenu.css';

const MainMenu = () => {
    const [ clickDrink, setClickDrink ] = useState();
    const [ clickFood, setClickFood ] = useState();

    const drinkTypes = ['Coffee', 'Tea', 'Cold Drinks'];
    const foodTypes = ['Breakfast & Lunch', 'Pastries', 'Snacks & Treats']

    return (
        <div className='main-menu'>
            <div className='menu-list'>
                <ul className='nav-menu'>
                    <li className='menu-item'
                        onClick={() => setClickDrink(!clickDrink)}
                        >Drinks <i className={clickDrink ? 'fas fa-caret-up' : 'fas fa-caret-down'}></i>
                    </li>
                    <ul className={clickDrink ? 'inside-list' : 'hidden'}>
                        {drinkTypes.map((item) => {
                            return <li className='menu-item'>{item}</li>
                        })}
                    </ul>
                    <li className='menu-item'
                        onClick={() => setClickFood(!clickFood)}
                        >Food <i className={clickFood ? 'fas fa-caret-up' : 'fas fa-caret-down'}></i>
                    </li>
                    <ul className={clickFood ? 'inside-list' : 'hidden'}>
                        {foodTypes.map((item) => {
                            return <li className='menu-item'>{item}</li>
                        })}
                    </ul>
                </ul>
            </div>
            <MenuCard/>
        </div>
    )
}

export default MainMenu;
