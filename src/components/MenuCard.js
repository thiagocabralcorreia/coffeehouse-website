import React from 'react';
import '../styles/MenuCard.css';
import { menuSections } from '../assets/data';
import { useMenu } from '../context/MenuContext';

function MenuCard() {
    const { currentMenu } = useMenu();
    return (
        <div className='menu-card-container'>
            <div className='menu-card-content'>
                <h1>{currentMenu}</h1>
                    {menuSections.map((menu) => 
                        menu.subsections.map((subsection) => {
                            return (
                            <div key={subsection.id}>
                                {subsection.type === currentMenu
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
                                {subsection.type === currentMenu
                                && <img className='menu-card-image'
                                    src={subsection.image}
                                    alt={currentMenu}></img>
                                }
                            </div>)
                        })
                    )}
            </div>
        </div>
    )
}

export default MenuCard;