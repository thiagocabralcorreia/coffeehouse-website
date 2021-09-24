import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { useValue } from '../../../context/PageContext';

const MenuList = ({ section, subsections }) => {
    const [showList, setShowList] = useState(false);
    const { setCurrentValue } = useValue();

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
                            onClick={() => setCurrentValue(submenu.type)}
                            >
                                {submenu.type}
                            </li>
                })}
            </ul>}
        </div>
    )
}

MenuList.propTypes = {
    section: PropTypes.string,
    subsections: PropTypes.arrayOf(PropTypes.object),
};

MenuList.defaultProps = {
    section: '',
    subsections: [],
};

export default MenuList;
