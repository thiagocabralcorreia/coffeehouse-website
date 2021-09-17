import React from 'react';
import '../styles/MainMenu.css';
import { menuSections } from '../data/menu';
import MenuCard from './MenuCard';
import MenuList from './MenuList';

import MenuProvider from '../context/MenuContext';

const MainMenu = () => {
    return (
        <MenuProvider defaultState='Coffee'>
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
        </MenuProvider>
    )
}

export default MainMenu;
