import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/ch-w-logo.png';

function NavBar() {
    return (
        <nav className='nav'>
            <div className='container'>
            <Link to='/' >
                 <img src={logo} alt='Coffee House logo' className='logo' />
            </Link>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                        HOME
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/menu' className='nav-link'>
                        MENU
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/shop' className='nav-link'>
                        SHOP
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                        MORE <i class="fas fa-caret-down"></i>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar;