import React from 'react';
import '../styles/MainMenu.css';
import { menuSections } from '../assets/data';
import MenuCard from './MenuCard';
import MenuList from './MenuList';

const MainMenu = () => {
    return (
        <div className='main-menu'>
            <div className='menu-list'>
                <ul className='nav-menu'>
                    {menuSections.map((menu) => {
                        return <MenuList
                        key={menu.id}
                        {...menu}/>
                    })}
                </ul>
            </div>
            <MenuCard/>
        </div>
    )
}

export default MainMenu;
