import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';
import {ReactComponent as Logo} from '../assets/ch-logo.svg';

function NavBar() {
    const [ click, setClick ] = useState(false);

    const { pathname } = useLocation()
    useEffect(() => {
        setClick(false);
    }, [pathname])

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' >
                    <Logo className='logo'/>
                </Link>
                <div className={click ? 'menu-icon active' : 'menu-icon'} onClick={() => setClick(!click)}>
                    <div className='line top'></div>
                    <div className='line middle'></div>
                    <div className='line bottom'></div>
                </div>
                <ul className={click ? 'nav-list mobile' : 'nav-list'}>
                    <li>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/menu' className='nav-link'>
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link'>
                            More
                            <div className='navbar-arrow-icon'>
                                <i className='fas fa-caret-down'></i>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/store-locator' className='nav-link'>
                            <i className="fas fa-map-marker-alt"></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={click ? 'overlay active' : 'overlay'} onClick={() => setClick(!click)}></div>
        </nav>
        </>
    )
}

export default NavBar;