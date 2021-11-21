import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Icon from '../Icon';
import { socialMedia } from '../../data/socialMedia';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='conditions'>
                <Link to='/about' className='link'>Our Story</Link>
                <Link to='/team' className='link'>The Team</Link>
                <a
                    href='https://github.com/thiagocabralcorreia/coffeehouse-website' className='link'
                    target='_blank'
                    rel='noreferrer'
                >
                    GitHub Code
                </a>
            </div>
            <div className='copyright'>
                <p>© Copyright 2021 | Coffee House project by <a href='https://www.linkedin.com/in/thiago-cabral-correia/' target='_blank' rel='noreferrer'>Thiago Correia</a>. All rights reserved.</p>
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
