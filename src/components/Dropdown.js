import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css';

function Dropdown() {
    const [ closeDropdown, setCloseDropdown ] = useState(true);
    console.log(closeDropdown);
    return (
        <div className={closeDropdown ? 'dropdown-menu open' :'dropdown-menu closed'}>
            <ul>
                <li>
                    <Link
                        onClick={() => setCloseDropdown(false)}
                        className='dropdown-link'
                        to='/about'
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setCloseDropdown(false)}
                        className='dropdown-link'
                        to='/contact'
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setCloseDropdown(false)}
                        className='dropdown-link'
                        to='/impact'
                    >
                        Impact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown
