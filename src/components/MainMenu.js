import React, { useState } from 'react';
import '../styles/MainMenu.css';

const MainMenu = () => {
    const [ click, setClick ] = useState();
    return (
        <div className='main-menu'>
            <div className='menu-list'>
                <ul className='nav-menu'>
                    <li className='menu-item'
                    onClick={() => setClick(!click)}
                    >Drinks <i className='fas fa-caret-down'></i>
                        <ul>
                            <li className={click ? 'menu-item' : 'hidden menu-item' }>Coffee</li>
                            <li className={click ? 'menu-item' : 'hidden menu-item' }>Tea</li>
                            <li className={click ? 'menu-item' : 'hidden menu-item' }>Cold Drinks</li>
                        </ul>
                    </li>
                    <li className='menu-item'
                    onClick={() => setClick(!click)}
                    >Food <i className='fas fa-caret-down'></i>
                        <ul>
                            <li className={click ? 'menu-item' : 'hidden menu-item' }>Breakfast & Lunch</li>
                            <li className={click ? 'menu-item' : 'hidden menu-item' }>Pastries</li>
                            <li className={click ? 'menu-item' : 'hidden menu-item' }>Snacks & Treats</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainMenu;
