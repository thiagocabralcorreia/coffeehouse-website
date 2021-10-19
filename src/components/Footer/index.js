import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { socialMedia } from '../../data/socialMedia';
import './styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='conditions'>
                <Link to='/' className='link'>Privacy Policy</Link>
                <Link to='/' className='link'>Cookie Policy</Link>
                <Link to='/' className='link'>Terms and Conditions</Link>
            </div>
            <div className='copyright'>
                <p>© Copyright 2021 | Coffee House by <a href='https://www.linkedin.com/in/thiago-cabral-correia/' target='_blank' rel='noreferrer'>Thiago Correia</a>. All rights reserved.</p>
            </div>
            <div className='social-media'>
                {socialMedia.map(( item, index ) => {
                    return (
                        <a key={index} href={item.link} target='_blank' rel='noreferrer'>
                            <Icon
                                className={item.icon}
                                hoverColor='$secondary'
                                size='1.5rem'
                            />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer;
