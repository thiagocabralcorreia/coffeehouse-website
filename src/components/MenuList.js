import React, { useState } from 'react';
import { useMenu } from '../context/MenuContext';
import '../styles/MenuList.css';

const MenuList = ({ section, subsections }) => {
    const [showList, setShowList] = useState(false);
    const { setCurrentMenu } = useMenu();

    return (
        <div className='menu-sections'>
            <li 
            onClick={() => setShowList(!showList)}>{section}
                    <div className={showList ? 'active menu-arrow-icon' : 'menu-arrow-icon'}>
                        <i className='fas fa-caret-up'></i>
                    </div>
            </li>
            {showList && <ul className='section-ul'>
                {subsections.map((submenu, index) => {
                    return <li key={index}
                            className='section-li'
                            onClick={() => setCurrentMenu(submenu.type)}
                            >
                                {submenu.type}
                            </li>
                })}
            </ul>}
        </div>
    )
}

export default MenuList;
