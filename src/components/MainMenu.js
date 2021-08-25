import React, { useState } from 'react';
import { MenuCard } from './MenuCard';
import '../styles/MainMenu.css';
import { menuSections } from '../assets/data';

const MainMenu = () => {
    const [ showList, setShowList ] = useState('');
    const [ selected, setSelected ] = useState('');
    console.log(showList)
    return (
        <div className='main-menu'>
            <div className='menu-list'>
                <ul className='nav-menu'>
                    {menuSections.map((type) => {
                        return (
                            <>
                                <li onClick={() => {
                                    setSelected(type.section)
                                    setShowList(!showList)
                                }}
                                >{type.section}
                                <div className={selected === type.section && showList
                                    ? 'menu-arrow-icon' : 'active menu-arrow-icon'}
                                >
                                    <i className='fas fa-caret-up'></i>
                                </div>
                                    
                                </li>
                                <ul className={selected === type.section && showList 
                                    ? 'active inside-list' : 'inside-list'}>
                                    {menuSections.map((menu) => 
                                        menu.subsections.map((item) => {
                                                if (menu.section === type.section) {
                                                    return <li>{item.title}</li>
                                                }
                                                else {
                                                    return '';
                                                }
                                            })
                                        )
                                    }
                                </ul>
                            </>
                        )
                    })}
                </ul>
            </div>
            <MenuCard/>
        </div>
    )
}

export default MainMenu;
