import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';
import {ReactComponent as Logo} from '../../assets/ch-logo.svg';
import DropdownMenu from './Dropdown/';

function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const onClose = () => {
        setMobileMenu(false);
        return (document.body.style.overflow = 'unset');
    };

    const onOpen = () => {
        setMobileMenu(true);
        return (document.body.style.overflow = 'hidden');
    };

    const handleClick = () => {
        setMobileMenu(!mobileMenu);
        if (mobileMenu === false) {onOpen()} else {onClose()}
    };

    const { pathname } = useLocation()
    useEffect(() => {
        setMobileMenu(false);
        onClose();
    }, [pathname]);

    const showMobileMenu = () => {
        if (window.innerWidth >= 720) {onClose()}
    };

    useEffect(() => {
        showMobileMenu();
    });

    window.addEventListener('resize', showMobileMenu);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' onClick={() => setMobileMenu(onClose)}>
                        <Logo className='logo'/>
                    </Link>
                    <div
                    className={mobileMenu ? 'menu-icon active' : 'menu-icon'}
                    onClick={() => setMobileMenu(handleClick)}
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
                <div className={mobileMenu ? 'overlay active' : 'overlay'} onClick={() => setMobileMenu(onClose)}></div>
            </nav>
        </>
    )
}

export default Header;