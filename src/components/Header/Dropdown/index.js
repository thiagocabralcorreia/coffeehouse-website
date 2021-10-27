import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export const DropdownItem = ({ title, to, onClick }) => {
    return (
        <li>
            <Link
                onClick={onClick}
                className='dropdown-link'
                to={to}
            >
                {title}
            </Link>
        </li>
    )
};

const Dropdown = () => {
    const [closeDropdown, setCloseDropdown] = useState(true);
    return (
        <div className={closeDropdown ? 'dropdown' :'dropdown closed'}>
            <ul>
                <DropdownItem
                    title='About'
                    to='/about'
                    onClick={() => setCloseDropdown(false)}
                />
                <DropdownItem
                    title='Contact'
                    to='/contact'
                    onClick={() => setCloseDropdown(false)}
                />
                <DropdownItem
                    title='Impact'
                    to='/impact'
                    onClick={() => setCloseDropdown(false)}
                />
            </ul>
        </div>
    )
}

export default Dropdown
