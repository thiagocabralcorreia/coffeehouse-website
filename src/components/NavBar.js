import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/ch-br-logo.png';

function NavBar() {
    const [ click, setClick ] = useState(false);
    return (
        <nav className='navbar'>
            <div className='container'>
                <Link to='/' >
                    <img src={logo} alt='Coffee House logo' className='logo' />
                </Link>
                <div className={click ? 'menu-icon active' : 'menu-icon'} onClick={() => setClick(!click)}>
                    <div class="line top"></div>
                    <div class="line middle"></div>
                    <div class="line bottom"></div>
                </div>
                <ul className={click ? 'nav-list active' : 'nav-list'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/menu' className='nav-link'>
                            Menu
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shop' className='nav-link'>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            More <i class="fas fa-caret-down"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;