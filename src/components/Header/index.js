import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';
import {ReactComponent as Logo} from '../../assets/ch-logo.svg';
import DropdownMenu from './Dropdown/';

function Header() {
    const [ mobileMenu, setMobileMenu ] = useState(false);
    const [ dropdown, setDropdown] = useState(false);
    
    const { pathname } = useLocation()
    useEffect(() => {
        setMobileMenu(false);
    }, [pathname])

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' >
                        <Logo className='logo'/>
                    </Link>
                    <div
                    className={mobileMenu ? 'menu-icon active' : 'menu-icon'}
                    onClick={() => setMobileMenu(!mobileMenu)}
                    >
                        <div className='line top'></div>
                        <div className='line middle'></div>
                        <div className='line bottom'></div>
                    </div>
                    <ul className={mobileMenu ? 'nav-list mobile' : 'nav-list'}>
                        <li className='nav-list-item'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-list-item'>
                            <Link to='/menu' className='nav-link'>Menu</Link>
                        </li>
                        <li
                            className='nav-list-item'
                            onMouseEnter={() => setDropdown(true)}
                            onMouseLeave={() => setDropdown(false)}
                        >
                            <p className='nav-link'>More</p>
                            {dropdown && <DropdownMenu />}
                        </li>
                        <li className='nav-list-item'>
                            <Link to='/store-locator' className='nav-link'>
                                <i className="fas fa-map-marker-alt"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={mobileMenu ? 'overlay active' : 'overlay'} onClick={() => setMobileMenu(!mobileMenu)}></div>
            </nav>
        </>
    )
}

export default Header;