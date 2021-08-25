import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-conditions'>
                <Link to='/' className='footer-conditions-link'>Privacy Policy</Link>
                <Link to='/' className='footer-conditions-link'>Cookie Policy</Link>
                <Link to='/' className='footer-conditions-link'>Terms and Conditions</Link>
            </div>
            <div className='copyright'>
                <p>© Copyright 2021 | Coffee House by Thiago Correia. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
